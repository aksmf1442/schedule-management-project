package com.illch.schedule.dto;

import com.illch.calendar.dto.SubscriberResponse;
import com.illch.calendar.dto.SubscribersResponse;
import com.illch.schedule.domain.Schedule;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@AllArgsConstructor
public class SchedulesResponse {

    List<ScheduleResponse> scheduleResponses;

    public static SchedulesResponse of(List<Schedule> schedules) {
        return SchedulesResponse.builder()
                .scheduleResponses(schedules.stream()
                        .map(ScheduleResponse::of)
                        .collect(Collectors.toList()))
                .build();
    }
}
