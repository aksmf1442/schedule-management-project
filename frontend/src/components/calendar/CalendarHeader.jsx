import React from 'react';

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { format } from 'date-fns';
import styled, { css } from 'styled-components';
import Button from '../common/Button';

const CalendarHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	padding: 3rem 2rem;

	font-size: 5rem;
	font-weight: 500;
	color: black;
`;

const MonthPickerStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const headerMenuStyle = css`
	position: relative;

	width: 8rem;
	height: 8rem;
	padding: 0;

	font-size: 4rem;
	line-height: 4rem;
	color: black;

	&:hover {
		border-radius: 50%;

		background: grey;

		filter: none;
	}

	&:hover span {
		visibility: visible;
	}
`;

const todayButtonStyle = css`
	width: 15rem;
	height: 8rem;

	padding: auto 0;

	font-size: 4rem;
	font-weight: 500;
	color: black;
	line-height: 4rem;
`;

function CalendarHeader({ currentDate, resetDate, prevMonth, nextMonth }) {
	return (
		<CalendarHeaderContainer>
			<span>
				{format(currentDate, 'yyyy')}년
				<span className="text month">{format(currentDate, 'M')}월</span>
			</span>
			<MonthPickerStyle>
				<Button css={headerMenuStyle} onClick={prevMonth}>
					<BsFillArrowLeftCircleFill size={24} />
				</Button>
				<Button css={todayButtonStyle} onClick={resetDate}>
					<span>오늘</span>
				</Button>
				<Button css={headerMenuStyle} onClick={nextMonth}>
					<BsFillArrowRightCircleFill size={24} />
				</Button>
			</MonthPickerStyle>
		</CalendarHeaderContainer>
	);
}

export default CalendarHeader;
