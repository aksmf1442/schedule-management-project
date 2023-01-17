import React from 'react';
import styled from 'styled-components';

const CalendarDaysContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(7, calc(100% / 7));

	height: 7rem;
`;

const CalendarDay = styled.span`
	padding: 2rem;
	border-top: 1px solid #dee2e6;
	border-right: 1px solid #dee2e6;
	border-left: ${({ day, DAYS }) => day === DAYS[0] && `1px solid #dee2e6`};

	font-size: 3rem;
	color: ${({ day, DAYS }) => day === DAYS[0] && '#ff8787'};
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
