package com.illch.auth.exception;

import com.illch.global.exception.http.UnauthorizedException;
import lombok.Getter;

public class FailedToGetAccessTokenException extends UnauthorizedException {

    public FailedToGetAccessTokenException() {
        super("AccessToken을 가져오는데 실패하였습니다.");
    }
}
