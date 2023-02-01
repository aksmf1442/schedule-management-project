import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import { MdSearch } from 'react-icons/md';

const SearchBoxForm = styled.form`
	position: relative;

	width: 100%;
	height: 12rem
	margin-bottom: 5rem;
`;

const searchBoxButtonStyle = css`
	position: absolute;
	z-index: 5;

	top: 50%;
	transform: translateY(-50%);

	width: 10rem;
`;

const InputContainer = styled.div`
	${({ theme }) => theme.flex.column}
	align-items: flex-start;

	position: relative;

	gap: 2.5rem;

	width: 100%;
	height: auto;

	font-size: 4rem;
`;

const Input = styled.input`
	padding: 3rem;

	width: 100%;
	border-radius: 7px;
	border: 1px solid ${({ theme }) => theme.colors.GRAY};

	height: 100%;
	padding-left: 10rem;

	font-size: 3.5rem;

	&:focus {
		outline: none;
		border-color: ${({ theme }) => theme.colors.LIGHT_BLUE};
		box-shadow: 0 0 2px ${({ theme }) => theme.colors.LIGHT_BLUE};
	}
`;

function SearchBox({ kewordRef, onSubmit }) {
	return (
		<SearchBoxForm onSubmit={onSubmit}>
			<Button type="submit" css={searchBoxButtonStyle}>
				<MdSearch size={17} />
			</Button>
			<InputContainer>
				<Input ref={kewordRef} />
			</InputContainer>
		</SearchBoxForm>
	);
}

export default SearchBox;
