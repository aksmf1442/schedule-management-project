import React from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import sideBarState from '../../recoil/sideBarState';
import MyCalendars from './calendars/MyCalendars';
import SubscribeCalendars from './subscribecalendars/SubscribeCalendars';

const Container = styled.div`
	overflow: hidden;
	position: fixed;
	z-index: 10;

	width: ${({ isSideBarOpen }) => (isSideBarOpen ? '64rem' : '0')};
	height: 100vh;
	border: 1px solid ${({ theme }) => theme.colors.GRAY};
	background: ${({ theme }) => theme.colors.WHITE};

	transition: width 0.5s;

	&:hover {
		overflow-y: overlay;
	}
`;

const listStyle = css`
	${({ theme }) => theme.flex.column}
	justify-content: flex-start;

	width: 57rem;

	margin-top: 1rem;
	margin-left: 4rem;

	cursor: pointer;

	font-size: 4rem;
`;

function SideBar() {
	const isSideBarOpen = useRecoilValue(sideBarState);

	return (
		<Container isSideBarOpen={isSideBarOpen}>
			<MyCalendars css={listStyle}>내 캘린더</MyCalendars>
			<SubscribeCalendars css={listStyle}>구독한 캘린더</SubscribeCalendars>
		</Container>
	);
}

export default SideBar;
