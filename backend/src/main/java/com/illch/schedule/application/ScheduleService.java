package com.illch.schedule.application;

import com.illch.calendar.domain.Calendar;
import com.illch.calendar.repository.CalendarRepository;
import com.illch.member.domain.Member;
import com.illch.member.repository.MemberRepository;
import com.illch.schedule.domain.Schedule;
import com.illch.schedule.dto.ScheduleRequest;
import com.illch.schedule.dto.ScheduleResponse;
import com.illch.schedule.repository.ScheduleRepository;
import com.illch.subscription.domain.Subscription;
import com.illch.subscription.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@RequiredArgsConstructor
@Service
public class ScheduleService {

    private final ScheduleRepository scheduleRepository;

    private final CalendarRepository calendarRepository;

    private final SubscriptionRepository subscriptionRepository;

    private final MemberRepository memberRepository;

    public ScheduleResponse createSchedule(Long calendarId, ScheduleRequest scheduleRequest, Long memberId) {
        Calendar calendar = calendarRepository.findById(calendarId).orElseThrow(RuntimeException::new);
        Member member = memberRepository.findById(memberId).orElseThrow(RuntimeException::new);

        validatePermission(member, calendar);

        Schedule schedule = scheduleRepository.save(scheduleRequest.toSchedule(calendar));
        return ScheduleResponse.of(schedule);
    }

    public ScheduleResponse updateSchedule(Long id, ScheduleRequest scheduleRequest, Long memberId) {
        Schedule schedule = scheduleRepository.findById(id).orElseThrow(RuntimeException::new);
        Member member = memberRepository.findById(memberId).orElseThrow(RuntimeException::new);
        Calendar calendar = schedule.getCalendar();

        validatePermission(member, calendar);

        schedule.update(scheduleRequest);
        return ScheduleResponse.of(schedule);
    }

    public void deleteSchedule(Long id, Long memberId) {
        Schedule schedule = scheduleRepository.findById(id).orElseThrow(RuntimeException::new);
        Member member = memberRepository.findById(memberId).orElseThrow(RuntimeException::new);
        Calendar calendar = schedule.getCalendar();

        validatePermission(member, calendar);

        scheduleRepository.delete(schedule);
    }

    private void validatePermission(Member member, Calendar calendar) {
        Subscription subscription = subscriptionRepository.findByMemberAndCalendar(member, calendar).orElseThrow(RuntimeException::new);
        subscription.getRole().validateEditingPermission();
    }
}
