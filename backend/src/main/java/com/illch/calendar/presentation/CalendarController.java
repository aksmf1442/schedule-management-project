package com.illch.calendar.presentation;

import com.illch.calendar.application.CalendarService;
import com.illch.calendar.dto.CalendarRequest;
import com.illch.global.config.auth.AppMember;
import com.illch.global.config.auth.LoginMember;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/calendars")
public class CalendarController {

    private final CalendarService calendarService;

    @PostMapping("")
    public ResponseEntity<Void> createCalendar(@RequestBody CalendarRequest calendarRequest, @LoginMember AppMember appMember) {
        calendarService.createCalendar(calendarRequest, appMember.getId());
        return ResponseEntity.noContent().build();
    }
}
