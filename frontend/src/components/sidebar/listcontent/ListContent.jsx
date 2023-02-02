import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBoxOutlineBlank, MdMoreVert, MdClose } from 'react-icons/md';
import Button from '../../common/Button';
import ModalPortal from '../../common/ModalPortal';
import ListContentModifier from './ListContentModifier';
import useModalPosition from '../../../hooks/useModalPosition';

const Container = styled.div`
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

const Content = styled.div`
	${({ theme }) => theme.flex.row}

	gap: 2rem;

	&:hover {
		cursor: pointer;
	}
`;

const ContentControl = styled.div`
	position: relative;
`;

const buttonStyle = css`
	visibility: hidden;
`;

function ListContent({ children }) {
	const { isModalOpen, toggleModalOpen, handleClickOpen, modalPos } = useModalPosition();

	return (
		<Container>
			<Content>
				<MdCheckBoxOutlineBlank />
				{children}
			</Content>
			<ContentControl>
				<Button css={buttonStyle}>
					<MdClose />
				</Button>
				<Button css={buttonStyle} onClick={handleClickOpen}>
					<MdMoreVert />
				</Button>
			</ContentControl>
			<ModalPortal
				isOpen={isModalOpen}
				closeModal={toggleModalOpen}
				dimmerBackground={'transparent'}
			>
				<ListContentModifier modalPos={modalPos} />
			</ModalPortal>
		</Container>
	);
}

export default ListContent;
