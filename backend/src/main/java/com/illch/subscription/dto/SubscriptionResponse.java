package com.illch.subscription.dto;

import com.illch.calendar.dto.CalendarResponse;
import com.illch.subscription.domain.Subscription;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class SubscriptionResponse {

    private Long id;

    private String color;

    private String subscriptionRole;

    private boolean checked;

    private CalendarResponse calendarResponse;

    public static SubscriptionResponse of(Subscription subscription) {
        return SubscriptionResponse.builder()
                .id(subscription.getId())
                .color(subscription.getColor().getName())
                .subscriptionRole(subscription.getRole().name())
                .checked(subscription.isChecked())
                .calendarResponse(CalendarResponse.of(subscription.getCalendar()))
                .build();
    }
}
