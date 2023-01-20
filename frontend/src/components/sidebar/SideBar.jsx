import React from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import sideBarState from '../../recoil/sideBarState';
import SideMyCalendarList from './SideMyCalendarList';
import SideSubscribedCalendarList from './SideSubscribedCalendarList';

const SideBarContainer = styled.div`
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

const sideListStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	width: 57rem;

	margin-top: 1rem;
	margin-left: 4rem;

	cursor: pointer;

	font-size: 4rem;
`;

function SideBar() {
	const isSideBarOpen = useRecoilValue(sideBarState);

	return (
		<SideBarContainer isSideBarOpen={isSideBarOpen}>
			<SideMyCalendarList css={sideListStyle}>내 캘린더</SideMyCalendarList>
			<SideSubscribedCalendarList css={sideListStyle}>구독한 캘린더</SideSubscribedCalendarList>
		</SideBarContainer>
	);
}

export default SideBar;
