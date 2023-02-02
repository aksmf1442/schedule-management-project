import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../common/Button';
import useToggle from '../../../hooks/useToggle';
import ModalPortal from '../../common/ModalPortal';
import { AiOutlinePlus, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import MyCalendarAdder from './MyCalendarAdder';
import ListContent from '../listcontent/ListContent';

const Container = styled.div`
	${({ css }) => css}
`;

const ContentsControl = styled.div`
	${({ theme }) => theme.flex.row}
	justify-content: space-between;

	width: 100%;
`;

const ControlText = styled.span`
	${({ theme }) => theme.flex.row}
	justify-content: flex-start;

	width: 100%;
	height: 8rem;

	color: ${({ theme }) => theme.colors.LIGHT_BLACK};

	font-weight: bold;
`;

const Contents = styled.div`
	${({ theme }) => theme.flex.column}

	gap: 2rem;
	overflow: hidden;

	width: 100%;
	height: ${({ isMyListOpen, listLength }) => (isMyListOpen ? `${9 * listLength}rem` : 0)};
	margin-bottom: 5rem;

	transition: height 0.2s ease-in-out;
`;

const buttonStyle = css`
	margin-left: 4rem;
`;

function MyCalendars({ css, children }) {
	const { isOpen: isMyListOpen, toggleClick: toggleMyListOpen } = useToggle(true);
	const { isOpen: isMyCalendarAdderOpen, toggleClick: toggleMyCalendarAdderOpen } = useToggle();

	return (
		<Container css={css}>
			<ContentsControl>
				<ControlText>{children}</ControlText>
				<Button onClick={toggleMyCalendarAdderOpen} css={buttonStyle}>
					<AiOutlinePlus size={16} />
				</Button>
				<Button onClick={toggleMyListOpen} css={buttonStyle}>
					{isMyListOpen ? <AiOutlineUp size={16} /> : <AiOutlineDown size={16} />}
				</Button>
			</ContentsControl>
			<Contents isMyListOpen={isMyListOpen} listLength={2}>
				<ListContent>내 캘린더1</ListContent>
				<ListContent>내 캘린더2</ListContent>
			</Contents>
			<ModalPortal isOpen={isMyCalendarAdderOpen} closeModal={toggleMyCalendarAdderOpen}>
				<MyCalendarAdder closeModal={toggleMyCalendarAdderOpen} />
			</ModalPortal>
		</Container>
	);
}

export default MyCalendars;
