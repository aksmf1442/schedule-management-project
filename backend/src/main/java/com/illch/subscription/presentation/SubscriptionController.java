package com.illch.subscription.presentation;

import com.illch.calendar.dto.CalendarRequest;
import com.illch.global.config.auth.AppMember;
import com.illch.global.config.auth.LoginMember;
import com.illch.subscription.application.SubscriptionService;
import com.illch.subscription.dto.SubscriptionRequest;
import com.illch.subscription.dto.SubscriptionResponse;
import com.illch.subscription.dto.SubscriptionResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    @GetMapping("")
    public ResponseEntity<SubscriptionResponses> findSubscriptions(@LoginMember AppMember appMember) {
        SubscriptionResponses subscriptionResponses = subscriptionService.findSubscriptions(appMember.getId());
        return ResponseEntity.ok(subscriptionResponses);
    }

    @PostMapping("")
    public ResponseEntity<SubscriptionResponse> createSubscription(@RequestBody SubscriptionRequest subscriptionRequest, @LoginMember AppMember appMember) {
        SubscriptionResponse subscriptionResponse = subscriptionService.createSubscription(subscriptionRequest, appMember.getId());
        return ResponseEntity.ok(subscriptionResponse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubscription(@PathVariable Long id, @LoginMember AppMember appMember) {
        subscriptionService.deleteSubscription(id, appMember);
        return ResponseEntity.noContent().build();
    }
}
