package com.illch.global.exception.common;

import com.illch.global.exception.http.BadRequestException;

public class MethodNotFoundException extends BadRequestException {

    public MethodNotFoundException() {
        super("해당 Method 요청을 찾을 수 없습니다.");
    }
}
