import React from 'react';
import styled, { css } from 'styled-components';
import useInput from '../../../hooks/useInput';
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
	${({ theme }) => theme.buttons.cancle}
`;

const ButtonsControl = styled.div`
	${({ theme }) => theme.flex.row}

	align-self: flex-end;
	gap: 5rem;
`;

const saveButtonStyle = css`
	${({ theme }) => theme.buttons.save}
`;

function MyCalendarAdder({ closeModal }) {
	const { inpuValue: myCalendar, onChangeValue: onChangeMyCalendar } = useInput();

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
						value={myCalendar}
						onChange={onChangeMyCalendar}
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
