import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../../common/Button';
import { AiOutlinePlus, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import { MdCheckBoxOutlineBlank, MdMoreVert, MdClose } from 'react-icons/md';
import useToggle from '../../../hooks/useToggle';
import ModalPortal from '../../common/ModalPortal';
import SubscribeCalendarAdder from './SubscribeCalendarAdder';

const ListBox = styled.div`
	${({ css }) => css}
`;

const ListHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	width: 100%;
`;

const ListHeaderText = styled.span`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	width: 100%;
	height: 8rem;

	color: ${({ theme }) => theme.colors.LIGHT_BLACK};

	font-weight: bold;
`;

const ListContents = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 2rem;
	overflow: hidden;

	width: 100%;
	height: ${({ isMyListOpen, listLength }) => (isMyListOpen ? `${9 * listLength}rem` : 0)};
	margin-bottom: 5rem;

	transition: height 0.2s ease-in-out;
`;

const ListContent = styled.div`
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

const ListContentModalContainer = styled.div`
	position: relative;
`;

const listContentModalButtonStyle = css`
	visibility: hidden;
`;

const listButtonStyle = css`
	margin-left: 4rem;
`;

function SubscribeCalendarList({ css, children }) {
	const { isOpen: isSubscriebeListOpen, toggleClick: toggleSubscriebeListOpen } = useToggle(true);
	const { isOpen: isSubscriebeAdderOpen, toggleClick: toggleSubscriebeAdderOpen } = useToggle();

	return (
		<ListBox css={css}>
			<ListHeader>
				<ListHeaderText>{children}</ListHeaderText>
				<Button onClick={toggleSubscriebeAdderOpen} css={listButtonStyle}>
					<AiOutlinePlus size={16} />
					<ModalPortal isOpen={isSubscriebeAdderOpen} closeModal={toggleSubscriebeAdderOpen}>
						<SubscribeCalendarAdder claseModal={toggleSubscriebeAdderOpen} />
					</ModalPortal>
				</Button>
				<Button onClick={toggleSubscriebeListOpen} css={listButtonStyle}>
					{isSubscriebeListOpen ? <AiOutlineUp size={16} /> : <AiOutlineDown size={16} />}
				</Button>
			</ListHeader>
			<ListContents isMyListOpen={isSubscriebeListOpen} listLength={2}>
				<ListContent>
					<ListContentNameContainer>
						<MdCheckBoxOutlineBlank />
						테스트
					</ListContentNameContainer>
					<ListContentModalContainer>
						<Button css={listContentModalButtonStyle}>
							<MdClose />
						</Button>
						<Button css={listContentModalButtonStyle}>
							<MdMoreVert />
						</Button>
					</ListContentModalContainer>
				</ListContent>
				<ListContent>
					<ListContentNameContainer>
						<MdCheckBoxOutlineBlank />
						테스트
					</ListContentNameContainer>
					<ListContentModalContainer>
						<Button css={listContentModalButtonStyle}>
							<MdClose />
						</Button>
						<Button css={listContentModalButtonStyle}>
							<MdMoreVert />
						</Button>
					</ListContentModalContainer>
				</ListContent>
			</ListContents>
		</ListBox>
	);
}

export default SubscribeCalendarList;