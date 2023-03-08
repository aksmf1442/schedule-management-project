package com.illch.subscription.application;

import com.illch.calendar.domain.Calendar;
import com.illch.calendar.repository.CalendarRepository;
import com.illch.member.domain.Member;
import com.illch.member.repository.MemberRepository;
import com.illch.subscription.domain.Subscription;
import com.illch.subscription.dto.SubscriptionRequest;
import com.illch.subscription.dto.SubscriptionResponse;
import com.illch.subscription.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@RequiredArgsConstructor
@Service
public class SubscriptionService {

    private final SubscriptionRepository subscriptionRepository;

    private final CalendarRepository calendarRepository;

    private final MemberRepository memberRepository;

    public SubscriptionResponse createSubscription(SubscriptionRequest subscriptionRequest, Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(RuntimeException::new);
        Calendar calendar = calendarRepository.findById(subscriptionRequest.getCalendarId()).orElseThrow(RuntimeException::new);
        Subscription subscription = subscriptionRepository.save(subscriptionRequest.toSubscription(member, calendar));
        return SubscriptionResponse.of(subscription);
    }
}
