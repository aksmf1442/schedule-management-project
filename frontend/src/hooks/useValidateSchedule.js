import useControlledInput from './useControlledInput';

function useValidateSchedule({
	initialTitle,
	initialStartDate,
	initialStartTime,
	initialEndDate,
	initialEndTime,
	initialCalendar,
}) {
	const title = useControlledInput(initialTitle);
	const startDate = useControlledInput(initialStartDate);
	const startTime = useControlledInput(initialStartTime);
	const endDate = useControlledInput(initialEndDate);
	const endTime = useControlledInput(initialEndTime);
	const calendar = useControlledInput(initialCalendar);

	// useEffect(() => {
	// 	if (startDate.inputValue + startTime.inputValue <= endDate.inputValue + endTime.inputValue)
	// 		return;

	// 	if (startDate.inputValue > endDate.inputValue) {
	// 		endDate.setInputValue(startDate.inputValue);
	// 		endTime.setInputValue(startTime.inputValue);

	// 		return;
	// 	}

	// 	if (startTime.inputValue >= '23:00') {
	// 		const nextDate = getISODateString(getDayOffsetDateTime(startDate.inputValue, 1));

	// 		endDate.setInputValue(nextDate);
	// 	}

	// 	endTime.setInputValue(getEndTime(startTime.inputValue));
	// }, [startDate, startTime]);

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
