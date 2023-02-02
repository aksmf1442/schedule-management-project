import React from 'react';
import styled, { css } from 'styled-components';
import useInput from '../../hooks/useInput';
import Button from '../common/Button';

import SearchBox from './SearchBox';

const Container = styled.div`
	${({ css }) => css}
`;

const SearchHeader = styled.span`
	${({ theme }) => theme.flex.row}
	justify-content: flex-start;

	width: 100%;
	height: 8rem;

	margin-bottom: 4rem;

	color: ${({ theme }) => theme.colors.LIGHT_BLACK};

	font-weight: bold;
`;

const SearchResults = styled.div`
	${({ theme }) => theme.flex.column}

	gap: 2rem;
	overflow: hidden;

	width: 100%;
	height: ${({ listLength }) => 9 * (listLength + 2)}rem;
	margin-bottom: 5rem;

	transition: height 0.2s ease-in-out;
`;

const SearchResultHeader = styled.div`
	${({ theme }) => theme.flex.row}
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
	${({ theme }) => theme.flex.row}
	justify-content: space-between;

	width: 100%;
	height: 7rem;
	margin-top: 4rem;

	color: ${({ theme }) => theme.colors.LIGHT_BLACK};
`;

function ScheduleSearch({ css, children }) {
	const listLength = 1;

	const { inputValue: keyword, onChangeValue: onChangeKeyword } = useInput();

	const handleSubmitSearch = e => {
		e.preventDefault();
	};

	return (
		<Container css={css}>
			<SearchHeader>{children}</SearchHeader>
			<SearchBox onSubmit={handleSubmitSearch} onChangeKeyword={onChangeKeyword} />
			<SearchResults listLength={listLength}>
				<Button css={searchResultStyle}>
					<SearchResultHeader>
						<ColorBox />
						{keyword}
					</SearchResultHeader>
					<SearchResultDate>2023.01.23(월)</SearchResultDate>
				</Button>
			</SearchResults>
		</Container>
	);
}

export default ScheduleSearch;
