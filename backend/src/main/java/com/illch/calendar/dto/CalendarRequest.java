package com.illch.calendar.dto;

import com.illch.calendar.domain.Calendar;
import com.illch.member.domain.Member;
import com.illch.subscription.domain.Subscription;
import com.illch.subscription.domain.SubscriptionRole;
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

    public Subscription toSubscription(Member member, Calendar calendar) {
        return Subscription.builder()
                // todo: Color enum 생성해서 랜덤 컬러로 들어갈 수 있게 변경
                .color("red")
                .role(SubscriptionRole.ADMIN)
                .checked(true)
                .member(member)
                .calendar(calendar)
                .build();
    }
}
