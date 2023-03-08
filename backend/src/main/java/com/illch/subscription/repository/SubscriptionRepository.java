package com.illch.subscription.repository;

import com.illch.calendar.domain.Calendar;
import com.illch.member.domain.Member;
import com.illch.subscription.domain.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    Optional<List<Subscription>> findAllByMember(Member member);

    Optional<List<Subscription>> findAllByCalendar(Calendar calendar);

    Optional<Subscription> findByMemberAndCalendar(Member member, Calendar calendar);
}
