package com.illch.calendar.application;

import com.illch.calendar.domain.Calendar;
import com.illch.calendar.dto.CalendarRequest;
import com.illch.calendar.dto.SubscribersResponse;
import com.illch.calendar.dto.UpdateCalendarOpenedRequest;
import com.illch.calendar.dto.UpdateCalendarTitleRequest;
import com.illch.calendar.exception.CalendarNotFoundException;
import com.illch.calendar.repository.CalendarRepository;
import com.illch.global.config.auth.AppMember;
import com.illch.member.domain.Member;
import com.illch.member.exception.MemberNotFoundException;
import com.illch.member.repository.MemberRepository;
import com.illch.schedule.domain.Schedule;
import com.illch.schedule.dto.SchedulesResponse;
import com.illch.schedule.exception.ScheduleNotFoundException;
import com.illch.schedule.repository.ScheduleRepository;
import com.illch.subscription.domain.Subscription;
import com.illch.subscription.exception.SubscriptionNotFoundException;
import com.illch.subscription.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@RequiredArgsConstructor
@Service
public class CalendarService {

    private final CalendarRepository calendarRepository;

    private final SubscriptionRepository subscriptionRepository;

    private final MemberRepository memberRepository;
    private final ScheduleRepository scheduleRepository;

    public void createCalendar(CalendarRequest calendarRequest, Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(MemberNotFoundException::new);
        Calendar calendar = calendarRepository.save(calendarRequest.toCalendar(member));
        Subscription subscription = calendarRequest.toSubscription(member, calendar);
        subscriptionRepository.save(subscription);
    }

    public void updateCalendarTitle(Long id, UpdateCalendarTitleRequest updateCalendarTitleRequest, AppMember appMember) {
        Calendar calendar = calendarRepository.findById(id).orElseThrow(CalendarNotFoundException::new);
        appMember.checkSameMember(calendar.getMember());
        calendar.updateCalendarTitle(updateCalendarTitleRequest.getTitle());
    }

    public void updateCalendarOpened(Long id, UpdateCalendarOpenedRequest updateCalendarOpenedRequest, AppMember appMember) {
        Calendar calendar = calendarRepository.findById(id).orElseThrow(CalendarNotFoundException::new);
        appMember.checkSameMember(calendar.getMember());
        calendar.updateCalendarOpened(updateCalendarOpenedRequest.isOpened());
    }

    public SubscribersResponse findSubscribers(Long id) {
        Calendar calendar = calendarRepository.findById(id).orElseThrow(CalendarNotFoundException::new);
        List<Subscription> subscriptions = subscriptionRepository.findAllByCalendar(calendar).orElseThrow(SubscriptionNotFoundException::new);
        return SubscribersResponse.of(subscriptions);
    }

    public SchedulesResponse findSchedules(Long id) {
        Calendar calendar = calendarRepository.findById(id).orElseThrow(CalendarNotFoundException::new);
        List<Schedule> schedules = scheduleRepository.findAllByCalendar(calendar).orElseThrow(ScheduleNotFoundException::new);
        return SchedulesResponse.of(schedules);
    }
}
