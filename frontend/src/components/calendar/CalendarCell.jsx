import React from 'react';

import styled from 'styled-components';
import { isSameMonth, isSameDay, getDay } from 'date-fns';

const CalendarCell = styled.div`
	position: relative;

	height: 100%;
	border-right: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-left: ${({ day, theme }) => day === 0 && `1px solid ${theme.colors.GRAY}`};

	&:hover {
		background: ${({ theme }) => theme.colors.GRAY};
		cursor: pointer;
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

	background: ${({ isToday, theme }) => isToday && theme.colors.LIGHT_BLUE};

	font-size: 2.5rem;
	font-weight: 500;

	color: ${({ isToday, isCurrentMonth, day, theme }) =>
		isToday
			? theme.colors.BLUE
			: day === 0
			? `${theme.colors.RED}${isCurrentMonth ? '' : '70'}`
			: `${theme.colors.BLACK}${isCurrentMonth ? '' : '70'}`};
	text-align: ${({ isToday }) => (isToday ? 'center' : 'right')};

	line-height: 3rem;
`;

function DateCell({ day, currentDate, originDate, formattedDate }) {
	return (
		<CalendarCell key={day} day={getDay(day)}>
			<CalendarCellText
				isCurrentMonth={isSameMonth(day, currentDate)}
				isToday={isSameDay(day, originDate)}
				day={getDay(day)}
			>
				{formattedDate}
			</CalendarCellText>
		</CalendarCell>
	);
}

export default DateCell;
