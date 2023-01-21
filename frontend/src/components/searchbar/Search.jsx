import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';

import SearchBox from './SearchBox';

const SearchContainer = styled.div`
	${({ css }) => css}
`;

const SearchHeaderText = styled.span`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	width: 100%;
	height: 8rem;

	margin-bottom: 4rem;

	color: ${({ theme }) => theme.colors.LIGHT_BLACK};

	font-weight: bold;
`;

const SearchResults = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 2rem;
	overflow: hidden;

	width: 100%;
	height: ${({ listLength }) => 9 * (listLength + 2)}rem;
	margin-bottom: 5rem;

	transition: height 0.2s ease-in-out;
`;

const SearchResultHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	width: 100%;
	height: 100%;
`;

const SearchResultDate = styled.div`
	font-size: 3rem;
`;

const ColorBox = styled.div`
	width: 1rem;
	height: 100%;
	background: red;

	margin-right: 1.5rem;

	border-radius: 20%;
`;

const searchResultStyle = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 7rem;
	margin-top: 4rem;

	color: ${({ theme }) => theme.colors.LIGHT_BLACK};
`;

function SearchList({ css, children }) {
	const listLength = 1;

	const keywordRef = useRef(null);
	const [keyword, setKeyword] = useState('');

	const handleSubmitSearch = e => {
		e.preventDefault();

		setKeyword(keywordRef.current.value);
	};

	return (
		<SearchContainer css={css}>
			<SearchHeaderText>{children}</SearchHeaderText>
			<SearchBox onSubmit={handleSubmitSearch} kewordRef={keywordRef} />
			<SearchResults listLength={listLength}>
				<Button css={searchResultStyle}>
					<SearchResultHeader>
						<ColorBox />
						{keyword}
					</SearchResultHeader>
					<SearchResultDate>2023.01.23(월)</SearchResultDate>
				</Button>
			</SearchResults>
		</SearchContainer>
	);
}

export default SearchList;
