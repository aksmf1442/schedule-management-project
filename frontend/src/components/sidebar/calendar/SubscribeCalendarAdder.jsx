import React from 'react';
import styled from 'styled-components';
import SubsribeSearchControl from './SubsribeSearchControl';

const SubscribeCalendarAdderContainer = styled.div`
	${({ theme }) => theme.flex.column}
	justify-content: space-between;

	width: 50%;
	height: 95%;
	padding: 12.5rem;
	border-radius: 7px;

	background: ${({ theme }) => theme.colors.WHITE};
`;

const SubscribeCalendarAdderTitle = styled.h1`
	font-size: 8rem;
	font-weight: bold;

	color: ${({ theme }) => theme.colors.GRAY};
`;

function SubscribeCalendarAdder() {
	return (
		<SubscribeCalendarAdderContainer>
			<SubscribeCalendarAdderTitle>캘린더 구독</SubscribeCalendarAdderTitle>
			<SubsribeSearchControl />
		</SubscribeCalendarAdderContainer>
	);
}

export default SubscribeCalendarAdder;
