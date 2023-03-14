package com.illch.auth.exception;

import com.illch.global.exception.http.UnauthorizedException;
import lombok.Getter;

public class InvalidBearerFormatException extends UnauthorizedException {

    public InvalidBearerFormatException() {
        super("Bearer 형식의 토큰이 아닙니다.");
    }
}
