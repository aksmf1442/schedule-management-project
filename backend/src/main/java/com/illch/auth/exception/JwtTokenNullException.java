package com.illch.auth.exception;

import com.illch.global.exception.http.UnauthorizedException;
import lombok.Getter;

public class JwtTokenNullException extends UnauthorizedException {

    public JwtTokenNullException() {
        super("토큰을 찾을 수 없습니다.");
    }
}
