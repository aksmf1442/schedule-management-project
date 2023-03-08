package com.illch.calendar.presentation;

import com.illch.calendar.application.CalendarService;
import com.illch.calendar.dto.*;
import com.illch.global.config.auth.AppMember;
import com.illch.global.config.auth.LoginMember;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}/subscribers")
    public ResponseEntity<SubscribersResponse> findSubscribers(@PathVariable Long id, @LoginMember AppMember appMember) {
         SubscribersResponse subscribersResponse =  calendarService.findSubscribers(id, appMember);
         return ResponseEntity.ok(subscribersResponse);
    }

    @PatchMapping("/{id}/title")
    public ResponseEntity<Void> updateCalendarTitle(@PathVariable Long id, @RequestBody UpdateCalendarTitleRequest updateCalendarTitleRequest,
                                                    @LoginMember AppMember appMember) {
        calendarService.updateCalendarTitle(id, updateCalendarTitleRequest, appMember);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/opened")
    public ResponseEntity<Void> updateCalendarOpened(@PathVariable Long id, @RequestBody UpdateCalendarOpenedRequest updateCalendarOpenedRequest,
                                                     @LoginMember AppMember appMember) {
        calendarService.updateCalendarOpened(id, updateCalendarOpenedRequest, appMember);
        return ResponseEntity.noContent().build();
    }
}