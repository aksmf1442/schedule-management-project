import React from 'react';

import styled from 'styled-components';
import { isSameMonth, isSameDay, getDay } from 'date-fns';

const CalendarCell = styled.div`
	position: relative;

	height: 100%;
	border-right: 1px solid #dee2e6;
	border-bottom: 1px solid #dee2e6;
	border-left: ${({ day }) => day === 0 && `1px solid #dee2e6`};

	&:hover {
		background: grey;
	}
`;

const CalendarCellText = styled.span`
	position: absolute;
	top: 1rem;
	right: 1rem;

	width: 5rem;
	height: 5rem;
	padding: 1rem;
	border-radius: 50%;

	background: ${({ isToday }) => isToday && 'red'};

	font-size: 2.5rem;
	font-weight: 500;

	color: ${({ isToday, isCurrentMonth, day }) =>
		isToday
			? 'white'
			: day === 0
			? `red ${isCurrentMonth ? '' : '80'}`
			: `grey ${isCurrentMonth ? '' : '80'}`};
	text-align: ${({ isToday }) => (isToday ? 'center' : 'right')};

	line-height: 3rem;
`;

function DateCell({ day, currentDate, originDate, formattedDate }) {
	return (
		<CalendarCell key={day} day={getDay(day)}>
			<CalendarCellText
				isCurrentMonth={isSameMonth(currentDate, originDate)}
				isToday={isSameDay(day, originDate)}
				day={getDay(day)}
			>
				{formattedDate}
			</CalendarCellText>
		</CalendarCell>
	);
}

export default DateCell;
