import React, { useRef } from 'react';

import styled from 'styled-components';
import { isSameMonth, isSameDay, getDay } from 'date-fns';
import ModalPortal from '../common/ModalPortal';
import Button from '../common/Button';
import useToggle from '../../hooks/useToggle';

const CalendarCell = styled.div`
	position: relative;

	height: 100%;
	border-right: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-left: ${({ day, theme }) => day === 0 && `1px solid ${theme.colors.GRAY}`};

	&:hover {
		background: ${({ theme }) => theme.colors.GRAY};
		cursor: pointer;
	}
`;

const CalendarCellText = styled.span`
	position: absolute;
	top: 1rem;
	right: 1rem;

	width: 5rem;
	height: 5rem;
	padding: 1rem;
	border-radius: 50%;

	background: ${({ isToday, theme }) => isToday && theme.colors.LIGHT_BLUE};

	font-size: 2.5rem;
	font-weight: 500;

	color: ${({ isToday, isCurrentMonth, day, theme }) =>
		isToday
			? theme.colors.BLUE
			: day === 0
			? `${theme.colors.RED}${isCurrentMonth ? '' : '70'}`
			: `${theme.colors.BLACK}${isCurrentMonth ? '' : '70'}`};
	text-align: ${({ isToday }) => (isToday ? 'center' : 'right')};

	line-height: 3rem;
`;

const Balloon = styled.div`
	justify-content: space-around;
	gap: 5rem;
	position: fixed;
	top: ${({ currentTop }) => currentTop + 64}px;
	left: ${({ currentLeft, isSideBarOpen }) => currentLeft + (isSideBarOpen ? 256 : 0) - 250}px;

	width: 60rem;
	padding: 5rem;
	box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
	border-radius: 7px;

	background: white;

	font-size: 4rem;
`;

function DateCell({ day, currentDate, originDate, formattedDate, isSideBarOpen }) {
	const { isOpen: isProfileModalOpen, toggleClick: toggleProfileModalOpen } = useToggle();

	const currentRef = useRef(null);

	const handleClickProfileMenuButton = () => {
		toggleProfileModalOpen();
	};

	return (
		<Button onClick={handleClickProfileMenuButton} aria-expanded={isProfileModalOpen}>
			<CalendarCell key={day} day={getDay(day)} ref={currentRef}>
				<CalendarCellText
					isCurrentMonth={isSameMonth(day, currentDate)}
					isToday={isSameDay(day, originDate)}
					day={getDay(day)}
				>
					{formattedDate}
				</CalendarCellText>
			</CalendarCell>
			<ModalPortal
				isOpen={isProfileModalOpen}
				closeModal={toggleProfileModalOpen}
				dimmerBackground={'transparent'}
			>
				<Balloon
					currentTop={currentRef?.current?.offsetTop}
					currentLeft={currentRef?.current?.offsetLeft}
					isSideBarOpen={isSideBarOpen}
				>
					asdf
				</Balloon>
			</ModalPortal>
		</Button>
	);
}

export default DateCell;
