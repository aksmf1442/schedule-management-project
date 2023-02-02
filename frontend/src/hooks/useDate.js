import { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';

function useDate() {
	const [date, setDate] = useState(new Date());

	const prevMonth = () => {
		setDate(subMonths(date, 1));
	};

	const resetDate = () => {
		setDate(new Date());
	};

	const nextMonth = () => {
		setDate(addMonths(date, 1));
	};

	return { date, setDate, prevMonth, resetDate, nextMonth };
}

export default useDate;
