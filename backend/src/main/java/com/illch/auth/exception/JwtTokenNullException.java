package com.illch.auth.exception;

import com.illch.global.exception.http.UnauthorizedException;

public class JwtTokenNullException extends UnauthorizedException {

    private final String message = "토큰을 찾을 수 없습니다.";
}
