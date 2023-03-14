package com.illch.auth.exception;

import com.illch.global.exception.http.UnauthorizedException;

public class JwtTokenExpiredException extends UnauthorizedException {

    public JwtTokenExpiredException(String exceptionName) {
        super(exceptionName + " 토큰이 만료되었습니다.");
    }
}
