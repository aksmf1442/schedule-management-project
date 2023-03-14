package com.illch.schedule.dto;

import com.illch.schedule.domain.Schedule;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class ScheduleResponse {

    private Long id;

    private String title;

    private LocalDateTime startDateTime;

    private LocalDateTime endDateTime;

    public static ScheduleResponse of(Schedule schedule) {
        return ScheduleResponse.builder()
                .id(schedule.getId())
                .title(schedule.getTitle())
                .startDateTime(schedule.getStartDateTime())
                .endDateTime(schedule.getEndDateTime())
                .build();
    }
}
