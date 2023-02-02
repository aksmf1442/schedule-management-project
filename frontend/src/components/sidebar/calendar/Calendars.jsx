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

function Calendars({ css, AdderModal, children }) {
	const { isOpen: isListOpen, toggleClick: toggleListOpen } = useToggle(true);
	const { isOpen: isCalendarAdderOpen, toggleClick: toggleCalendarAdderOpen } = useToggle();

	return (
		<Container css={css}>
			<ContentsControl>
				<ControlText>{children}</ControlText>
				<Button onClick={toggleCalendarAdderOpen} css={buttonStyle}>
					<AiOutlinePlus size={16} />
				</Button>
				<Button onClick={toggleListOpen} css={buttonStyle}>
					{isListOpen ? <AiOutlineUp size={16} /> : <AiOutlineDown size={16} />}
				</Button>
			</ContentsControl>
			<Contents isMyListOpen={isListOpen} listLength={2}>
				<ListContent>캘린더1</ListContent>
				<ListContent>캘린더2</ListContent>
			</Contents>
			<ModalPortal isOpen={isCalendarAdderOpen} closeModal={toggleCalendarAdderOpen}>
				<AdderModal closeModal={toggleCalendarAdderOpen} />
			</ModalPortal>
		</Container>
	);
}

export default Calendars;
