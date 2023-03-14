package com.illch.auth.exception;

import com.illch.global.exception.http.UnauthorizedException;
import lombok.Getter;

@Getter
public class FailedToGetProfileException extends UnauthorizedException {

    public FailedToGetProfileException() {
        super("프로필 정보를 가져오는데 실패하였습니다.");
    }
}
