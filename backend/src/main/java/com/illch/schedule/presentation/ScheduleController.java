package com.illch.schedule.presentation;

import com.illch.global.config.auth.AppMember;
import com.illch.global.config.auth.LoginMember;
import com.illch.member.dto.MemberResponse;
import com.illch.schedule.application.ScheduleService;
import com.illch.schedule.dto.ScheduleRequest;
import com.illch.schedule.dto.ScheduleResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/schedules")
public class ScheduleController {

    private final ScheduleService scheduleService;

    @PostMapping("/{calendarId}")
    public ResponseEntity<ScheduleResponse> createSchedule(@PathVariable Long calendarId, @RequestBody ScheduleRequest scheduleRequest, @LoginMember AppMember appMember) {
        ScheduleResponse scheduleResponse = scheduleService.createSchedule(calendarId, scheduleRequest, appMember.getId());
        return ResponseEntity.ok(scheduleResponse);
    }
}
