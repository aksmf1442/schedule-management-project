package com.illch.global.config.util;

import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;

import java.util.HashMap;
import java.util.Map;

public class PathPatterns {

    private final PathMatcher pathMatcher;
    private final Map<String, PathMethod> includePathPattern;
    private final Map<String, PathMethod> excludePathPattern;

    public PathPatterns() {
        this.pathMatcher = new AntPathMatcher();
        this.includePathPattern = new HashMap<>();
        this.excludePathPattern = new HashMap<>();
    }

    public boolean validatePath(String path, PathMethod method) {
        if (method == PathMethod.OPTIONS) {
            return true;
        }
        boolean excludePattern = excludePathPattern.entrySet()
                .stream()
                .anyMatch(requestPath -> anyMatchPathPattern(path, method, requestPath));

        boolean includePattern = includePathPattern.entrySet()
                .stream()
                .anyMatch(requestPath -> anyMatchPathPattern(path, method, requestPath));

        return excludePattern || !includePattern;
    }

    private boolean anyMatchPathPattern(String path, PathMethod pathMethod,
                                        Map.Entry<String, PathMethod> requestPath) {
        return pathMatcher.match(requestPath.getKey(), path) && pathMethod.validate(requestPath.getValue());

    }

    public void addIncludePathPattern(String path, PathMethod method) {
        includePathPattern.put(path, method);
    }

    public void addExcludePathPattern(String path, PathMethod method) {
        excludePathPattern.put(path, method);
    }
}
