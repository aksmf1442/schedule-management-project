import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBoxOutlineBlank, MdMoreVert, MdClose } from 'react-icons/md';
import Button from '../../../common/Button';
import ModalPortal from '../../../common/ModalPortal';
import ListItemModifier from './ListItemModifier';
import useModalPosition from '../../../../hooks/ useModalPosition';

const ListContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

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
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

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
					<ModalPortal
						isOpen={isModalOpen}
						closeModal={toggleModalOpen}
						dimmerBackground={'transparent'}
					>
						<ListItemModifier closeModal={toggleModalOpen} modalPos={modalPos} />
					</ModalPortal>
				</Button>
			</ListContentModalOpenContainer>
		</ListContentContainer>
	);
}

export default ListItem;
