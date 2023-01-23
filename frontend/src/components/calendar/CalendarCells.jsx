import React from 'react';

import { format } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { addDays } from 'date-fns';
import styled from 'styled-components';

import CalendarCell from './CalendarCell';
import { useRecoilValue } from 'recoil';
import sideBarState from '../../recoil/sideBarState';

const CalendarCellsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(7, calc(100% / 7));
	grid-auto-rows: calc(calc(100vh - 42rem) / ${({ rowNum }) => rowNum});
`;

function CalendarCells({ currentDate, originDate }) {
	const isSideBarOpen = useRecoilValue(sideBarState);

	const monthStart = startOfMonth(currentDate);
	const monthEnd = endOfMonth(monthStart);
	const startDate = startOfWeek(monthStart);
	const endDate = endOfWeek(monthEnd);

	let days = [];
	let day = startDate;
	let formattedDate = '';
	let rowLength = 5;

	while (day <= endDate) {
		for (let i = 0; i < 7; i++) {
			formattedDate = format(day, 'd');
			days.push(
				<CalendarCell
					key={day}
					day={day}
					originDate={originDate}
					formattedDate={formattedDate}
					currentDate={currentDate}
					isSideBarOpen={isSideBarOpen}
				/>,
			);
			day = addDays(day, 1);
		}
	}

	return <CalendarCellsContainer rowNum={rowLength}>{days}</CalendarCellsContainer>;
}

export default CalendarCells;
