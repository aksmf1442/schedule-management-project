package com.illch.schedule.repository;

import com.illch.member.domain.Member;
import com.illch.schedule.domain.Schedule;
import com.illch.search.dto.SearchSchedulesRequest;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.illch.schedule.domain.QSchedule.schedule;
import static com.illch.subscription.domain.QSubscription.subscription;

@Repository
@RequiredArgsConstructor
public class ScheduleQueryRepositoryImpl implements ScheduleQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<Schedule> searchSchedules(SearchSchedulesRequest request, Member member) {
        return jpaQueryFactory
                .selectFrom(schedule)
                .innerJoin(subscription)
                .on(subscription.member.eq(member))
                .where(schedule.title.contains(request.getTitle()))
                .orderBy(schedule.startDateTime.asc(), schedule.id.desc())
                .limit(request.getLimit())
                .offset((request.getPage() - 1) * request.getLimit())
                .fetch();
    }

    @Override
    public Long countSchedulesByTitle(String title, Member member) {
        return jpaQueryFactory
                .select(schedule.count())
                .from(schedule)
                .innerJoin(subscription)
                .on(subscription.member.eq(member))
                .where(schedule.title.contains(title))
                .fetchOne();
    }
}
