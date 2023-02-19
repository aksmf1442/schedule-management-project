package com.illch.global.config.util;

import java.util.Arrays;

public enum PathMethod {
    GET, POST, PUT, PATCH, DELETE, OPTIONS, ALL;

    public static PathMethod of(String method) {
        return Arrays.stream(values())
                .filter(pathMethod -> pathMethod.name().equals(method))
                .findFirst()
                .orElseThrow(RuntimeException::new);
    }

    public boolean validate(PathMethod value) {
        if (value == PathMethod.ALL) {
            return true;
        }
        return this == value;
    }
}
