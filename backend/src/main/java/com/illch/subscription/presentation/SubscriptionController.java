package com.illch.subscription.presentation;

import com.illch.calendar.dto.CalendarRequest;
import com.illch.global.config.auth.AppMember;
import com.illch.global.config.auth.LoginMember;
import com.illch.subscription.application.SubscriptionService;
import com.illch.subscription.dto.SubscriptionRequest;
import com.illch.subscription.dto.SubscriptionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    @PostMapping("")
    public ResponseEntity<SubscriptionResponse> createSubscription(@RequestBody SubscriptionRequest subscriptionRequest, @LoginMember AppMember appMember) {
        SubscriptionResponse subscriptionResponse = subscriptionService.createSubscription(subscriptionRequest, appMember.getId());
        return ResponseEntity.ok(subscriptionResponse);
    }
}
