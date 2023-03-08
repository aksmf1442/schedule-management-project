package com.illch.subscription.dto;

import com.illch.subscription.domain.Subscription;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@AllArgsConstructor
public class SubscriptionResponses {

    private List<SubscriptionResponse> subscriptionsResponse;


    public static SubscriptionResponses of(List<Subscription> subscriptions) {
        return SubscriptionResponses.builder()
                .subscriptionsResponse(subscriptions.stream()
                        .map(SubscriptionResponse::of)
                        .collect(Collectors.toList()))
                .build();
    }
}
