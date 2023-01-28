import React from 'react';
import styled from 'styled-components';
import SearchControl from './SearchControl';

const SubscribeCalendarAdderContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
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

function SubscribeCalendarAdder({ closeModal }) {
	return (
		<SubscribeCalendarAdderContainer>
			<SubscribeCalendarAdderTitle>캘린더 구독</SubscribeCalendarAdderTitle>
			<SearchControl />
		</SubscribeCalendarAdderContainer>
	);
}

export default SubscribeCalendarAdder;
