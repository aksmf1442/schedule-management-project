import React from 'react';

import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { format } from 'date-fns';
import styled, { css } from 'styled-components';
import Button from '../common/Button';

const Container = styled.div`
	${({ theme }) => theme.flex.row}
	justify-content: space-between;

	width: 100%;
	padding: 3rem 2rem;

	font-size: 5rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.BLACK};
`;

const MonthContorl = styled.div`
	${({ theme }) => theme.flex.row}
	justify-content: space-around;
`;

const controlButtonStyle = css`
	position: relative;

	width: 8rem;
	height: 8rem;
	padding: 0;

	font-size: 4rem;
	line-height: 4rem;
	color: ${({ theme }) => theme.colors.BLACK};

	&:hover {
		border-radius: 50%;

		background: ${({ theme }) => theme.colors.GRAY};

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
	color: ${({ theme }) => theme.colors.BLACK};
	line-height: 4rem;
`;

function CalendarHeader({ currentDate, resetDate, prevMonth, nextMonth }) {
	return (
		<Container>
			<span>
				{format(currentDate, 'yyyy')}년 {format(currentDate, 'M')}월
			</span>
			<MonthContorl>
				<Button css={controlButtonStyle} onClick={prevMonth}>
					<IoIosArrowDropleft size={24} />
				</Button>
				<Button css={todayButtonStyle} onClick={resetDate}>
					오늘
				</Button>
				<Button css={controlButtonStyle} onClick={nextMonth}>
					<IoIosArrowDropright size={24} />
				</Button>
			</MonthContorl>
		</Container>
	);
}

export default CalendarHeader;
