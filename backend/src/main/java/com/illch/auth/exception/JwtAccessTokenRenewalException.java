package com.illch.auth.exception;

import com.illch.global.exception.http.UnauthorizedException;

public class JwtAccessTokenRenewalException extends UnauthorizedException {

    public JwtAccessTokenRenewalException() {
        super("AccessToken의 갱신이 필요합니다.");
    }
}
