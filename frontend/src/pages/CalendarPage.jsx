import React from 'react';
import styled from 'styled-components';
import Calendar from '../components/calendar/Calendar';

const CalendarPageContainer = styled.div`
	overflow-y: auto;
	position: relative;

	padding: 0 4rem 4rem;
	height: calc(100vh - 16rem);
	margin-top: 16rem;
`;

function CalendarPage() {
	return (
		<CalendarPageContainer>
			<Calendar />
		</CalendarPageContainer>
	);
}

export default CalendarPage;
