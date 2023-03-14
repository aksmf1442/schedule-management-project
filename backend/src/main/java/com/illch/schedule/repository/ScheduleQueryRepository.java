package com.illch.schedule.repository;

import com.illch.member.domain.Member;
import com.illch.schedule.domain.Schedule;
import com.illch.search.dto.SearchSchedulesRequest;

import java.util.List;
import java.util.Optional;

public interface ScheduleQueryRepository {

    Optional<List<Schedule>> searchSchedules(SearchSchedulesRequest searchSchedulesRequest, Member member);

    Long countSchedulesByTitle(String title, Member member);
}
