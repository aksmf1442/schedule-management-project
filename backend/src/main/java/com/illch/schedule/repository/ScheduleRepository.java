package com.illch.schedule.repository;

import com.illch.calendar.domain.Calendar;
import com.illch.schedule.domain.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ScheduleRepository extends JpaRepository<Schedule, Long>, ScheduleQueryRepository {

    Optional<List<Schedule>> findAllByCalendar(Calendar calendar);
}
