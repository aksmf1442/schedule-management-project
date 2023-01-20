import React from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import searchBarState from '../../recoil/searchBarState';

const SearchBarContainer = styled.div`
	overflow: hidden;
	position: fixed;
	right: 0;
	z-index: 10;

	width: ${({ isSearchBarOpen }) => (isSearchBarOpen ? '64rem' : '0')};
	height: 100vh;
	border: 1px solid ${({ theme }) => theme.colors.GRAY};
	background: ${({ theme }) => theme.colors.WHITE};

	transition: width 0.5s;

	&:hover {
		overflow-y: overlay;
	}
`;

function SearchBar() {
	const isSearchBarOpen = useRecoilValue(searchBarState);

	return <SearchBarContainer isSearchBarOpen={isSearchBarOpen}></SearchBarContainer>;
}

export default SearchBar;
