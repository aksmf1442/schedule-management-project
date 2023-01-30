import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../common/Button';
import useToggle from '../../../hooks/useToggle';
import ModalPortal from '../../common/ModalPortal';
import { AiOutlinePlus, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import MyCalendarAdder from './MyCalendarAdder';
import ListItem from '../listitem/ListItem';

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

const listButtonStyle = css`
	margin-left: 4rem;
`;

function MyCalendarList({ css, children }) {
	const { isOpen: isMyListOpen, toggleClick: toggleMyListOpen } = useToggle(true);
	const { isOpen: isMyCalendarAdderOpen, toggleClick: toggleMyCalendarAdderOpen } = useToggle();

	return (
		<ListBox css={css}>
			<ListHeader>
				<ListHeaderText>{children}</ListHeaderText>
				<Button onClick={toggleMyCalendarAdderOpen} css={listButtonStyle}>
					<AiOutlinePlus size={16} />
				</Button>
				<Button onClick={toggleMyListOpen} css={listButtonStyle}>
					{isMyListOpen ? <AiOutlineUp size={16} /> : <AiOutlineDown size={16} />}
				</Button>
			</ListHeader>
			<ListContents isMyListOpen={isMyListOpen} listLength={2}>
				<ListItem>내 캘린더1</ListItem>
				<ListItem>내 캘린더2</ListItem>
			</ListContents>
			<ModalPortal isOpen={isMyCalendarAdderOpen} closeModal={toggleMyCalendarAdderOpen}>
				<MyCalendarAdder claseModal={toggleMyCalendarAdderOpen} />
			</ModalPortal>
		</ListBox>
	);
}

export default MyCalendarList;
