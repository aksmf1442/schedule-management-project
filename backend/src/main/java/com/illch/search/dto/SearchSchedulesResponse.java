package com.illch.search.dto;

import com.illch.schedule.domain.Schedule;
import com.illch.schedule.dto.ScheduleResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@AllArgsConstructor
public class SearchSchedulesResponse {

    List<ScheduleResponse> scheduleResponses;

    Long maxPage;

    public static SearchSchedulesResponse of(List<Schedule> schedules, Long maxPage) {
        return SearchSchedulesResponse.builder()
                .scheduleResponses(schedules.stream()
                        .map(ScheduleResponse::of)
                        .collect(Collectors.toList()))
                .maxPage(maxPage)
                .build();
    }
}
