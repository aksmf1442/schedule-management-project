package com.illch.schedule.domain;

import com.illch.BaseEntity;
import com.illch.calendar.domain.Calendar;
import com.illch.schedule.dto.ScheduleRequest;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
public class Schedule extends BaseEntity {

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private LocalDateTime startDateTime;

    @Column(nullable = false)
    private LocalDateTime endDateTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "calendar_id", nullable = false)
    private Calendar calendar;

    @Builder
    public Schedule(String title, LocalDateTime startDateTime, LocalDateTime endDateTime, Calendar calendar) {
        this.title = title;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.calendar = calendar;
    }

    public void update(ScheduleRequest scheduleRequest) {
        this.title = scheduleRequest.getTitle();
        this.startDateTime = scheduleRequest.getStartDateTime();
        this.endDateTime = scheduleRequest.getEndDateTime();
    }
}
