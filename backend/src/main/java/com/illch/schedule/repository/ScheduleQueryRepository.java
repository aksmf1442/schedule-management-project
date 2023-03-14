package com.illch.schedule.repository;

import com.illch.member.domain.Member;
import com.illch.schedule.domain.Schedule;
import com.illch.search.dto.SearchSchedulesRequest;

import java.util.List;

public interface ScheduleQueryRepository {

    List<Schedule> searchSchedules(SearchSchedulesRequest searchSchedulesRequest, Member member);

    Long countSchedulesByTitle(String title, Member member);
}
