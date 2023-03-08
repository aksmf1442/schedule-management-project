package com.illch.calendar.dto;

import com.illch.subscription.domain.Subscription;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@AllArgsConstructor
public class SubscribersResponse {

    private List<SubscriberResponse> subscribersResponse;


    public static SubscribersResponse of(List<Subscription> subscriptions) {
        return SubscribersResponse.builder()
                .subscribersResponse(subscriptions.stream()
                        .map(SubscriberResponse::of)
                        .collect(Collectors.toList()))
                .build();
    }
}
