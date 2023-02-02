import { useEffect } from 'react';
import useInput from './useInput';

import { addDays } from 'date-fns';
import { getFormatDate, getEndTime } from '../util/date';

function useValidateSchedule({
	initialTitle,
	initialStartDate,
	initialStartTime,
	initialEndDate,
	initialEndTime,
	initialCalendar,
}) {
	const title = useInput(initialTitle);
	const startDate = useInput(initialStartDate);
	const startTime = useInput(initialStartTime);
	const endDate = useInput(initialEndDate);
	const endTime = useInput(initialEndTime);
	const calendar = useInput(initialCalendar);

	useEffect(() => {
		if (startDate.inputValue + startTime.inputValue < endDate.inputValue + endTime.inputValue) {
			return;
		}

		if (startDate.inputValue > endDate.inputValue) {
			endDate.setInputValue(startDate.inputValue);
			endTime.setInputValue(startTime.inputValue);
		}

		if (startTime.inputValue === '23:00') {
			const nextDate = getFormatDate(addDays(new Date(startDate.inputValue), 1));

			endDate.setInputValue(nextDate);
		}

		endTime.setInputValue(getEndTime(startTime.inputValue));
	}, [startDate, startTime]);

	return {
		title,
		startDate,
		startTime,
		endDate,
		endTime,
		calendar,
	};
}

export default useValidateSchedule;
