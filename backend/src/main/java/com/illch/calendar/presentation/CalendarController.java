package com.illch.calendar.presentation;

import com.illch.calendar.application.CalendarService;
import com.illch.calendar.dto.CalendarRequest;
import com.illch.calendar.dto.SubscribersResponse;
import com.illch.calendar.dto.UpdateCalendarOpenedRequest;
import com.illch.calendar.dto.UpdateCalendarTitleRequest;
import com.illch.global.config.auth.AppMember;
import com.illch.global.config.auth.LoginMember;
import com.illch.schedule.dto.SchedulesResponse;
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
    public ResponseEntity<SubscribersResponse> findSubscribers(@PathVariable Long id) {
        SubscribersResponse subscribersResponse = calendarService.findSubscribers(id);
        return ResponseEntity.ok(subscribersResponse);
    }

    @GetMapping("/{id}/schedules")
    public ResponseEntity<SchedulesResponse> findSchedules(@PathVariable Long id) {
        SchedulesResponse schedulesResponse = calendarService.findSchedules(id);
        return ResponseEntity.ok(schedulesResponse);
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
