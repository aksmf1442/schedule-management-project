import React, { useRef } from 'react';

import styled from 'styled-components';
import { isSameMonth, isSameDay, getDay } from 'date-fns';
import ModalPortal from '../common/ModalPortal';
import Button from '../common/Button';
import useToggle from '../../hooks/useToggle';
import ScheduleAdder from '../schedule/ScheduleAdder';

const CalendarCellContainer = styled.div`
	position: relative;

	height: 100%;
	border-right: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
	border-left: ${({ day, theme }) => day === 0 && `1px solid ${theme.colors.GRAY}`};

	&:hover {
		background: ${({ theme }) => theme.colors.WHITE};
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

function CalendarCell({ day, currentDate, originDate, formattedDate, isSideBarOpen }) {
	const { isOpen: isScheduleAdderModalOpen, toggleClick: toggleScheduleAdderModalOpen } =
		useToggle();

	const handleClickScheduleAdderButton = () => {
		toggleScheduleAdderModalOpen();
	};

	return (
		<Button onClick={handleClickScheduleAdderButton} aria-expanded={isScheduleAdderModalOpen}>
			<CalendarCellContainer key={day} day={getDay(day)}>
				<CalendarCellText
					isCurrentMonth={isSameMonth(day, currentDate)}
					isToday={isSameDay(day, originDate)}
					day={getDay(day)}
				>
					{formattedDate}
				</CalendarCellText>
			</CalendarCellContainer>
			<ModalPortal isOpen={isScheduleAdderModalOpen} closeModal={toggleScheduleAdderModalOpen}>
				<ScheduleAdder isSideBarOpen={isSideBarOpen} day={getDay(day)} />
			</ModalPortal>
		</Button>
	);
}

export default CalendarCell;
