import React from 'react';
import styled from 'styled-components';

const CalendarDaysContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(7, calc(100% / 7));

	height: 7rem;
`;

const CalendarDay = styled.span`
	padding: 2rem;
	border-top: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-right: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-left: ${({ day, DAYS, theme }) => day === DAYS[0] && `1px solid ${theme.colors.GRAY}`};

	font-size: 3rem;
	color: ${({ day, DAYS, theme }) => day === DAYS[0] && theme.colors.RED};
	text-align: right;
`;

function CalendarDays({ DAYS }) {
	return (
		<CalendarDaysContainer>
			{DAYS.map(day => (
				<CalendarDay DAYS={DAYS} key={day} day={day}>
					{day}
				</CalendarDay>
			))}
		</CalendarDaysContainer>
	);
}

export default CalendarDays;
