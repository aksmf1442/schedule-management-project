import React from 'react';
import styled from 'styled-components';
import Calendar from '../components/calendar/Calendar';
import sideBarState from '../recoil/sideBarState';
import { useRecoilValue } from 'recoil';

const CalendarPageContainer = styled.div`
	overflow-y: auto;
	position: relative;

	padding: 0 4rem 4rem;
	height: calc(100vh - 16rem);
	margin-top: 16rem;

	@media screen and (min-width: 1024px) {
		margin-left: ${({ isSideBarOpen }) => (isSideBarOpen ? '64rem' : '0')};

		transition: margin-left 0.5s;
	}
`;

function CalendarPage() {
	const isSideBarOpen = useRecoilValue(sideBarState);

	return (
		<CalendarPageContainer isSideBarOpen={isSideBarOpen}>
			<Calendar />
		</CalendarPageContainer>
	);
}

export default CalendarPage;
