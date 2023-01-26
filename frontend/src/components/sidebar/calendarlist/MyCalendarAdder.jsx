import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../common/Button';

const MyCalendarAdderContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100rem;
	height: 70rem;
	padding: 12.5rem;
	border-radius: 7px;
	justify-content: space-between;

	background: ${({ theme }) => theme.colors.WHITE};
`;

const MyCalendarAdderTitle = styled.h1`
	font-size: 8rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.GRAY};
`;

const MyCalendarAdderForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	height: 100%;
`;

const MyCalendarContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
`;

const MyCalendarInput = styled.input`
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

const saveButtonStyle = css`
	padding: 2rem 3rem;
	box-sizing: border-box;
	border-radius: 7px;
	border: 1px solid ${({ theme }) => theme.colors.BLUE};

	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.BLUE};
`;

const MyCalendarControlButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	align-self: flex-end;
	gap: 5rem;
`;

function MyCalendarAdder({ closeModal }) {
	return (
		<MyCalendarAdderContainer>
			<MyCalendarAdderTitle>내 캘린더 추가</MyCalendarAdderTitle>
			<MyCalendarAdderForm>
				<MyCalendarContent>
					<MyCalendarInput placeholder="캘린더 제목" autoFocus={true} />
				</MyCalendarContent>
				<MyCalendarControlButtons>
					<Button css={cancelButtonStyle} onClick={closeModal}>
						취소
					</Button>
					<Button css={saveButtonStyle}>저장</Button>
				</MyCalendarControlButtons>
			</MyCalendarAdderForm>
		</MyCalendarAdderContainer>
	);
}

export default MyCalendarAdder;
