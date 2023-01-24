import React, { useRef } from 'react';

import styled from 'styled-components';
import { isSameMonth, isSameDay, getDay } from 'date-fns';
import ModalPortal from '../common/ModalPortal';
import Button from '../common/Button';
import useToggle from '../../hooks/useToggle';
import ScheduleAdder from '../schedule/ScheduleAdder';

const CalendarCell = styled.div`
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
			<ModalPortal isOpen={isProfileModalOpen} closeModal={toggleProfileModalOpen}>
				<ScheduleAdder
					currentTop={currentRef?.current?.offsetTop}
					currentLeft={currentRef?.current?.offsetLeft}
					isSideBarOpen={isSideBarOpen}
				>
					asdf
				</ScheduleAdder>
			</ModalPortal>
		</Button>
	);
}

export default DateCell;
