import React from 'react';
import { MdSettings, MdOutlineDelete } from 'react-icons/md';
import styled, { css } from 'styled-components';
import useToggle from '../../../../hooks/useToggle';
import Button from '../../../common/Button';

const controlButtonStyle = css`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

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
		transform: scale(1.2);
		background: transparent;
	}
`;

const ModalPosContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	position: absolute;
	top: ${({ modalPos }) => (modalPos.top ? `${modalPos.top}px` : 'none')};
	left: ${({ modalPos }) => (modalPos.left ? `${modalPos.left}px` : 'none')};

	border: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-radius: 7px;

	background: ${({ theme }) => theme.colors.WHITE};
`;

const ColorsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	place-items: center;
	gap: 2rem;

	width: 35rem;
	padding: 2rem;
`;

const COLORS = ['red', 'green', 'black', 'pink', 'blue', 'orange', 'gray'];

function ListItemModifier({ modalPos, closeModal }) {
	const canEditSubscription = true;
	const canDeleteSubscription = false;

	const { isOpen: isCalendarManageModalOpen, toggleClick: toggleCalendarManageModalOpen } =
		useToggle();

	const handleClickManageButton = () => {
		toggleCalendarManageModalOpen();
	};

	return (
		<ModalPosContainer modalPos={modalPos}>
			{canEditSubscription && (
				<Button css={controlButtonStyle} onClick={handleClickManageButton}>
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
			<ColorsContainer>
				{COLORS.map(color => {
					return <Button key={color} css={colorStyle} color={color} />;
				})}
			</ColorsContainer>
		</ModalPosContainer>
	);
}

export default ListItemModifier;
