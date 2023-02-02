import React from 'react';
import styled from 'styled-components';
import Calendar from '../components/calendar/Calendar';
import sideBarState from '../recoil/sideBarState';
import { useRecoilValue } from 'recoil';
import searchBarState from '../recoil/searchBarState';

const Container = styled.div`
	overflow-y: auto;
	position: relative;

	padding: 0 4rem 4rem;
	height: calc(100vh - 16rem);
	margin-top: 16rem;

	@media screen and (min-width: 1024px) {
		margin-left: ${({ isSideBarOpen }) => (isSideBarOpen ? '64rem' : '0')};
		margin-right: ${({ isSearchBarOpen }) => (isSearchBarOpen ? '80rem' : '0')};
		transition: margin 0.5s;
	}
`;

function CalendarPage() {
	const isSideBarOpen = useRecoilValue(sideBarState);
	const isSearchBarOpen = useRecoilValue(searchBarState);

	return (
		<Container isSideBarOpen={isSideBarOpen} isSearchBarOpen={isSearchBarOpen}>
			<Calendar />
		</Container>
	);
}

export default CalendarPage;
