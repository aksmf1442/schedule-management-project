package com.illch.calendar.dto;

import com.illch.calendar.domain.Calendar;
import com.illch.member.dto.MemberResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class CalendarResponse {

    private Long id;

    private String title;

    private MemberResponse author;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public static CalendarResponse of(Calendar calendar) {
        return CalendarResponse.builder()
                .id(calendar.getId())
                .title(calendar.getTitle())
                .author(MemberResponse.of(calendar.getMember()))
                .createdAt(calendar.getCreatedAt())
                .updatedAt(calendar.getUpdatedAt())
                .build();
    }
}
