package com.illch.calendar.dto;

import com.illch.calendar.domain.Calendar;
import com.illch.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CalendarRequest {

    @NotNull
    @Length(min = 1, max = 10)
    private String title;

    private boolean opened;

    public Calendar toCalendar(Member member) {
        return Calendar.builder()
                .title(title)
                .opened(opened)
                .deleted(false)
                .member(member)
                .build();
    }
}
