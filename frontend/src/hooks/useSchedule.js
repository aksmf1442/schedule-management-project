import { useEffect } from 'react';
import useInput from './useInput';
import format from 'date-fns/format';
import { addDays } from 'date-fns';

const getFormatDate = date => {
	return format(date, 'yyyy-MM-dd');
};

const getEndTime = startTime => {
	const [nowHour] = startTime.split(':');
	const hour = Number(nowHour) + 1;
	return nowHour < '23' ? `${hour < 10 ? '0' + hour : hour}:00` : `00:00`;
};

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
