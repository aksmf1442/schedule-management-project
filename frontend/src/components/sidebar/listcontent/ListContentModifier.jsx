import React from 'react';
import { useState } from 'react';
import { MdSettings, MdOutlineDelete } from 'react-icons/md';
import styled, { css } from 'styled-components';
import useToggle from '../../../hooks/useToggle';
import Button from '../../common/Button';
import ModalPortal from '../../common/ModalPortal';
import CalendarModifier from './CalendarModifier';

const Container = styled.div`
	${({ theme }) => theme.flex.column}
	align-items: flex-start;

	position: absolute;
	top: ${({ modalPos }) => (modalPos.top ? `${modalPos.top}px` : 'none')};
	left: ${({ modalPos }) => (modalPos.left ? `${modalPos.left}px` : 'none')};

	border: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-radius: 7px;

	background: ${({ theme }) => theme.colors.WHITE};
`;

const controlButtonStyle = css`
	${({ theme }) => theme.flex.row}
	justify-content: flex-start;

	gap: 1rem;

	width: 100%;
	padding: 2rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
	box-sizing: contain;

	&:hover {
		filter: none;
		background-color: ${({ theme }) => theme.colors.GRAY};
	}
`;

const colorStyle = css`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;

	&:hover {
		filter: none;
		border-radius: 100%;
		transform: scale(1.2);
	}
`;

const Colors = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	place-items: center;
	gap: 2rem;

	width: 35rem;
	padding: 2rem;
`;

const COLORS = ['red', 'green', 'black', 'pink', 'blue', 'orange', 'gray'];

function ListContentModifier({ modalPos, closeModal }) {
	const canEditSubscription = true;
	const canDeleteSubscription = false;

	const { isOpen: isCalendarManageModalOpen, toggleClick: toggleCalendarManageModalOpen } =
		useToggle();

	const [currentColor, setCurrentColor] = useState('');

	const colorButtonClick = color => {
		setCurrentColor(color);
		closeModal();
	};

	return (
		<Container modalPos={modalPos}>
			{canEditSubscription && (
				<Button css={controlButtonStyle} onClick={toggleCalendarManageModalOpen}>
					<MdSettings size={24} />
					관리
				</Button>
			)}
			{canDeleteSubscription && (
				<Button css={controlButtonStyle}>
					<MdOutlineDelete size={24} />
					구독 해제
				</Button>
			)}
			<Colors>
				{COLORS.map(color => {
					return (
						<Button
							key={color}
							css={colorStyle}
							color={color}
							onClick={() => colorButtonClick(color)}
						/>
					);
				})}
			</Colors>
			<ModalPortal isOpen={isCalendarManageModalOpen} closeModal={toggleCalendarManageModalOpen}>
				<CalendarModifier clasModal={toggleCalendarManageModalOpen} />
			</ModalPortal>
		</Container>
	);
}

export default ListContentModifier;
