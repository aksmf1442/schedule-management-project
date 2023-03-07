package com.illch.calendar.application;

import com.illch.calendar.domain.Calendar;
import com.illch.calendar.dto.CalendarRequest;
import com.illch.calendar.dto.UpdateCalendarTitleRequest;
import com.illch.calendar.repository.CalendarRepository;
import com.illch.global.config.auth.AppMember;
import com.illch.member.domain.Member;
import com.illch.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@RequiredArgsConstructor
@Service
public class CalendarService {

    private final CalendarRepository calendarRepository;
    private final MemberRepository memberRepository;

    public void createCalendar(CalendarRequest calendarRequest, Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(RuntimeException::new);
        Calendar calendar = calendarRequest.toCalendar(member);
        calendarRepository.save(calendar);
    }

    public void updateCalendarTitle(Long id, UpdateCalendarTitleRequest updateCalendarTitleRequest, AppMember appMember) {
        Calendar calendar = calendarRepository.findById(id).orElseThrow(RuntimeException::new);
        appMember.checkSameMember(calendar.getMember());
        calendar.updateCalendarTitle(updateCalendarTitleRequest.getTitle());
    }
}
