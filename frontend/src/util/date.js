import format from 'date-fns/format';

const getFormatDate = date => {
	return format(date, 'yyyy-MM-dd');
};

const getEndTime = startTime => {
	const [nowHour] = startTime.split(':');
	const hour = Number(nowHour) + 1;
	return nowHour < '23' ? `${hour < 10 ? '0' + hour : hour}:00` : `00:00`;
};

export { getFormatDate, getEndTime };
