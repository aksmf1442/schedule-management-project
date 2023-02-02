import React from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import searchBarState from '../../recoil/searchBarState';
import ScheduleSearch from './ScheduleSearch';

const Container = styled.div`
	overflow: hidden;
	position: fixed;
	right: 0;
	z-index: 10;

	width: ${({ isSearchBarOpen }) => (isSearchBarOpen ? '80rem' : '0')};
	height: 100vh;
	border: 1px solid ${({ theme }) => theme.colors.GRAY};
	background: ${({ theme }) => theme.colors.WHITE};

	transition: width 0.5s;

	&:hover {
		overflow-y: overlay;
	}
`;

const searchListStyle = css`
	${({ theme }) => theme.flex.column}
	justify-content: flex-start;

	width: 70rem;

	margin-top: 1rem;
	margin-left: 4rem;

	font-size: 4rem;
`;

function SearchBar() {
	const isSearchBarOpen = useRecoilValue(searchBarState);

	return (
		<Container isSearchBarOpen={isSearchBarOpen}>
			<ScheduleSearch css={searchListStyle}>일정 검색</ScheduleSearch>
		</Container>
	);
}

export default SearchBar;
