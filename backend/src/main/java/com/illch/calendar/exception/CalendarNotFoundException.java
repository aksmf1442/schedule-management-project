package com.illch.calendar.exception;

import com.illch.global.exception.http.NotFoundException;
import lombok.Getter;

@Getter
public class CalendarNotFoundException extends NotFoundException {

    public CalendarNotFoundException() {
        super("해당 캘린더가 존재하지 않습니다.");
    }
}
