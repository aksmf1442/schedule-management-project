package com.illch.subscription.exception;

import com.illch.global.exception.http.UnauthorizedException;

public class UnauthorizedEditingException extends UnauthorizedException {

    public UnauthorizedEditingException() {
        super("편집 권한이 없습니다.");
    }
}
