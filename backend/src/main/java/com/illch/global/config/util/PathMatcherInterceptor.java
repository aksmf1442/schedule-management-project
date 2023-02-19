package com.illch.global.config.util;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PathMatcherInterceptor implements HandlerInterceptor {

    private final HandlerInterceptor handlerInterceptor;
    private final PathPatterns pathPatterns;

    public PathMatcherInterceptor(HandlerInterceptor handlerInterceptor) {
        this.handlerInterceptor = handlerInterceptor;
        this.pathPatterns = new PathPatterns();
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object handler) throws Exception {
        String requestURI = request.getRequestURI();
        PathMethod method = PathMethod.of(request.getMethod());
        if (pathPatterns.validatePath(requestURI, method)) {
            return true;
        }
        return handlerInterceptor.preHandle(request, response, handler);
    }

    public PathMatcherInterceptor addIncludePathPattern(String path, PathMethod method) {
        pathPatterns.addIncludePathPattern(path, method);
        return this;
    }

    public PathMatcherInterceptor addExcludePathPattern(String path, PathMethod method) {
        pathPatterns.addExcludePathPattern(path, method);
        return this;
    }
}
