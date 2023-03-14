package com.illch.member.exception;

import com.illch.global.exception.http.UnauthorizedException;
import lombok.Getter;

public class MemberUnauthorizedException extends UnauthorizedException {

    public MemberUnauthorizedException() {
        super("권한이 없는 멤버입니다.");
    }
}
