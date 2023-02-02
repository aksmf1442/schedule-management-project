import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../../common/Button';

const Container = styled.div`
	${({ theme }) => theme.flex.column}

	width: 100rem;
	height: 70rem;
	padding: 12.5rem;
	border-radius: 7px;
	justify-content: space-between;

	background: ${({ theme }) => theme.colors.WHITE};
`;

const Title = styled.h1`
	font-size: 8rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.GRAY};
`;

const Form = styled.form`
	${({ theme }) => theme.flex.column}
	justify-content: space-between;

	width: 100%;
	height: 100%;
`;

const Content = styled.div`
	${({ theme }) => theme.flex.column}

	width: 100%;
	height: 100%;
`;

const Input = styled.input`
	width: 100%;
	background: inherit;
	border: 0;

	font-family: inherit;
	font-size: 4rem;

	&:focus {
		outline: none;
		box-shadow: 0px 0px 2px inherit;
	}
`;

const cancelButtonStyle = css`
	padding: 2rem 3rem;
	box-sizing: border-box;
	border: 1px solid ${({ theme }) => theme.colors.BLACK};
	border-radius: 7px;
	box-shadow: 0 2px 2px ${({ theme }) => theme.colors.GRAY};

	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.BLACK};
`;

const ButtonsControl = styled.div`
	${({ theme }) => theme.flex.row}

	align-self: flex-end;
	gap: 5rem;
`;

const saveButtonStyle = css`
	padding: 2rem 3rem;
	box-sizing: border-box;
	border-radius: 7px;
	border: 1px solid ${({ theme }) => theme.colors.BLUE};

	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.BLUE};
`;

function MyCalendarAdder({ closeModal }) {
	const [myCalendarTitle, setMyCalendarTitle] = useState('');

	const onChangeMyCalendarTitle = ({ target }) => {
		if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) {
			setMyCalendarTitle(target.value);
		}
	};

	const handleSubmitMyCalendarAdderForm = e => {
		e.preventDefault();
		closeModal();
	};

	return (
		<Container>
			<Title>캘린더 추가</Title>
			<Form onSubmit={handleSubmitMyCalendarAdderForm}>
				<Content>
					<Input
						value={myCalendarTitle}
						onChange={onChangeMyCalendarTitle}
						placeholder="캘린더 제목"
						autoFocus={true}
					/>
				</Content>
				<ButtonsControl>
					<Button css={cancelButtonStyle} onClick={closeModal}>
						취소
					</Button>
					<Button type="submit" css={saveButtonStyle}>
						추가
					</Button>
				</ButtonsControl>
			</Form>
		</Container>
	);
}

export default MyCalendarAdder;
