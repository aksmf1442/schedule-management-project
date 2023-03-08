package com.illch.calendar.dto;

import com.illch.member.domain.Member;
import com.illch.member.dto.MemberResponse;
import com.illch.subscription.domain.Subscription;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class SubscriberResponse {

    private String subscriptionRole;

    private MemberResponse memberResponse;

    public static SubscriberResponse of(Subscription subscription) {
        return SubscriberResponse.builder()
                .subscriptionRole(subscription.getRole().name())
                .memberResponse(MemberResponse.of(subscription.getMember()))
                .build();
    }
}
