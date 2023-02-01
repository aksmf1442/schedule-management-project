import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBoxOutlineBlank, MdMoreVert, MdClose } from 'react-icons/md';
import Button from '../../common/Button';
import ModalPortal from '../../common/ModalPortal';
import ListItemModifier from './ListItemModifier';
import useModalPosition from '../../../hooks/ useModalPosition';

const ListContentContainer = styled.div`
	${({ theme }) => theme.flex.row}
	justify-content: space-between;

	width: 100%;
	height: 7rem;

	&:hover {
		background-color: ${({ theme }) => theme.colors.GRAY};

		button {
			visibility: visible;
		}
	}
`;

const ListContentNameContainer = styled.div`
	${({ theme }) => theme.flex.row}

	gap: 2rem;

	&:hover {
		cursor: pointer;
	}
`;

const ListContentModalOpenContainer = styled.div`
	position: relative;
`;

const listItemModalButtonStyle = css`
	visibility: hidden;
`;

function ListItem({ children }) {
	const { isModalOpen, toggleModalOpen, handleClickOpen, modalPos } = useModalPosition();

	return (
		<ListContentContainer>
			<ListContentNameContainer>
				<MdCheckBoxOutlineBlank />
				{children}
			</ListContentNameContainer>
			<ListContentModalOpenContainer>
				<Button css={listItemModalButtonStyle}>
					<MdClose />
				</Button>
				<Button css={listItemModalButtonStyle} onClick={handleClickOpen}>
					<MdMoreVert />
				</Button>
				<ModalPortal
					isOpen={isModalOpen}
					closeModal={toggleModalOpen}
					dimmerBackground={'transparent'}
				>
					<ListItemModifier closeModal={toggleModalOpen} modalPos={modalPos} />
				</ModalPortal>
			</ListContentModalOpenContainer>
		</ListContentContainer>
	);
}

export default ListItem;
