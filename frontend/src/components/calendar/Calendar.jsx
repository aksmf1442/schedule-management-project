import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';

import CalendarHeader from './CalendarHeader';
import CalendarDays from './CalendarDays';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

function Calendar() {
	const [currentDate, setCurrentDate] = useState(new Date());

	const prevMonth = () => {
		setCurrentDate(subMonths(currentDate, 1));
	};

	const resetDate = () => {
		setCurrentDate(new Date());
	};

	const nextMonth = () => {
		setCurrentDate(addMonths(currentDate, 1));
	};

	return (
		<>
			<CalendarHeader
				currentDate={currentDate}
				resetDate={resetDate}
				prevMonth={prevMonth}
				nextMonth={nextMonth}
			/>
			<CalendarDays DAYS={DAYS} />
		</>
	);
}

export default Calendar;
