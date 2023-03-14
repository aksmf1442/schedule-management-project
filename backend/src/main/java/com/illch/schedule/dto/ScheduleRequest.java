package com.illch.schedule.dto;

import com.illch.calendar.domain.Calendar;
import com.illch.schedule.domain.Schedule;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ScheduleRequest {

    @NotNull
    @Length(min = 1, max = 10)
    private String title;

    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    private LocalDateTime startDateTime;

    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    private LocalDateTime endDateTime;

    public Schedule toSchedule(Calendar calendar) {
        return Schedule.builder()
                .title(title)
                .startDateTime(startDateTime)
                .endDateTime(endDateTime)
                .calendar(calendar)
                .build();
    }
}
