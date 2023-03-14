package com.illch.search.application;

import com.illch.member.domain.Member;
import com.illch.member.repository.MemberRepository;
import com.illch.schedule.domain.Schedule;
import com.illch.schedule.repository.ScheduleRepository;
import com.illch.search.dto.SearchSchedulesRequest;
import com.illch.search.dto.SearchSchedulesResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@RequiredArgsConstructor
@Service
public class SearchService {

    private final ScheduleRepository scheduleRepository;

    private final MemberRepository memberRepository;

    public SearchSchedulesResponse searchSchedules(SearchSchedulesRequest searchSchedulesRequest, Long userId) {
        Member member = memberRepository.findById(userId).orElseThrow(RuntimeException::new);
        List<Schedule> schedules = scheduleRepository.searchSchedules(searchSchedulesRequest, member);
        Long schedulesCount = scheduleRepository.countSchedulesByTitle(searchSchedulesRequest.getTitle(), member);
        Long maxPage = Math.floorDiv(Math.abs(schedulesCount - 1), searchSchedulesRequest.getLimit()) + 1;
        return SearchSchedulesResponse.of(schedules, maxPage);
    }
}
