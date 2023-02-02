import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(7, calc(100% / 7));

	height: 7rem;
`;

const Day = styled.span`
	padding: 2rem;
	border-top: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-right: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-left: ${({ day, sunday, theme }) => day === sunday && `1px solid ${theme.colors.GRAY}`};

	font-size: 3rem;
	color: ${({ day, sunday, theme }) => day === sunday && theme.colors.RED};
	text-align: right;
`;

function CalendarDays({ DAYS }) {
	return (
		<Container>
			{DAYS.map(day => (
				<Day key={day} day={day} sunday={DAYS[0]}>
					{day}
				</Day>
			))}
		</Container>
	);
}

export default CalendarDays;
