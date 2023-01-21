import React, { useRef, useState } from 'react';
import styled from 'styled-components';

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

	color: ${({ theme }) => theme.colors.LIGHT_BLACK};

	font-weight: bold;
`;

const Contents = styled.div`
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

const Content = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 7rem;
	margin-top: 4rem;
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
			<Content>
				<SearchBox onSubmit={handleSubmitSearch} kewordRef={keywordRef} />
			</Content>
		</SearchContainer>
	);
}

export default SearchList;
