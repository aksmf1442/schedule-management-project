package com.illch.schedule.exception;

import com.illch.global.exception.http.NotFoundException;

public class ScheduleNotFoundException extends NotFoundException {

    public ScheduleNotFoundException() {
        super("해당 일정은 존재하지 않습니다.");
    }
}
