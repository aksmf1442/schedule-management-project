import React from 'react';

import { DAYS } from '../../constants/date';

import CalendarHeader from './CalendarHeader';
import CalendarDays from './CalendarDays';
import CalendarCells from './CalendarCells';
import useDate from '../../hooks/useDate';

function Calendar() {
	const { date: currentDate, prevMonth, resetDate, nextMonth } = useDate();
	const { date: originDate } = useDate();

	return (
		<>
			<CalendarHeader
				currentDate={currentDate}
				resetDate={resetDate}
				prevMonth={prevMonth}
				nextMonth={nextMonth}
			/>
			<CalendarDays DAYS={DAYS} />
			<CalendarCells currentDate={currentDate} originDate={originDate} />
		</>
	);
}

export default Calendar;
