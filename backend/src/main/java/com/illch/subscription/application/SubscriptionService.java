package com.illch.subscription.application;

import com.illch.calendar.domain.Calendar;
import com.illch.calendar.exception.CalendarNotFoundException;
import com.illch.calendar.repository.CalendarRepository;
import com.illch.global.config.auth.AppMember;
import com.illch.member.domain.Member;
import com.illch.member.exception.MemberNotFoundException;
import com.illch.member.repository.MemberRepository;
import com.illch.subscription.domain.Subscription;
import com.illch.subscription.dto.SubscriptionRequest;
import com.illch.subscription.dto.SubscriptionResponse;
import com.illch.subscription.dto.SubscriptionResponses;
import com.illch.subscription.exception.SubscriptionNotFoundException;
import com.illch.subscription.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@RequiredArgsConstructor
@Service
public class SubscriptionService {

    private final SubscriptionRepository subscriptionRepository;

    private final CalendarRepository calendarRepository;

    private final MemberRepository memberRepository;

    public SubscriptionResponse createSubscription(SubscriptionRequest subscriptionRequest, Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(MemberNotFoundException::new);
        Calendar calendar = calendarRepository.findById(subscriptionRequest.getCalendarId()).orElseThrow(CalendarNotFoundException::new);
        Subscription subscription = subscriptionRepository.save(subscriptionRequest.toSubscription(member, calendar));
        return SubscriptionResponse.of(subscription);
    }

    public void deleteSubscription(Long id, AppMember appMember) {
        Subscription subscription = subscriptionRepository.findById(id).orElseThrow(SubscriptionNotFoundException::new);
        appMember.checkSameMember(subscription.getMember());
        subscriptionRepository.deleteById(id);
    }

    public SubscriptionResponses findSubscriptions(Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(MemberNotFoundException::new);
        List<Subscription> subscriptions = subscriptionRepository.findAllByMember(member).orElseThrow(SubscriptionNotFoundException::new);
        return SubscriptionResponses.of(subscriptions);
    }
}
