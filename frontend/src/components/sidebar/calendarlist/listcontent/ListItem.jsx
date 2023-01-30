import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBoxOutlineBlank, MdMoreVert, MdClose } from 'react-icons/md';
import Button from '../../../common/Button';

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

const listContentModalButtonStyle = css`
	visibility: hidden;
`;

function ListItem({ children }) {
	return (
		<ListContentContainer>
			<ListContentNameContainer>
				<MdCheckBoxOutlineBlank />
				{children}
			</ListContentNameContainer>
			<ListContentModalOpenContainer>
				<Button css={listContentModalButtonStyle}>
					<MdClose />
				</Button>
				<Button css={listContentModalButtonStyle}>
					<MdMoreVert />
				</Button>
			</ListContentModalOpenContainer>
		</ListContentContainer>
	);
}

export default ListItem;
