package com.illch.member.exception;

import com.illch.global.exception.http.BadRequestException;
import lombok.Getter;

@Getter
public class MemberNotFoundException extends BadRequestException {

    public MemberNotFoundException() {
        super("해당 멤버가 존재하지 않습니다.");
    }
}
