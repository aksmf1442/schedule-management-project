package com.illch.subscription.dto;

import com.illch.calendar.domain.Calendar;
import com.illch.member.domain.Member;
import com.illch.subscription.domain.Color;
import com.illch.subscription.domain.Subscription;
import com.illch.subscription.domain.SubscriptionRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionRequest {

    @NotNull
    private Long calendarId;

    @NotNull
    private String color;

    public Subscription toSubscription(Member member, Calendar calendar) {
        return Subscription.builder()
                .color(Color.valueOf(color))
                .role(SubscriptionRole.COMMON)
                .checked(true)
                .member(member)
                .calendar(calendar)
                .build();
    }
}
