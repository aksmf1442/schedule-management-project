import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import sideBarState from '../recoil/sideBarState';

const SideBarContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 10;
	width: ${({ isOpen }) => (isOpen ? '70rem' : '0')};
	height: 100vh;
	border: 1px solid #ced4da;
	background: white;
	transition: width 0.5s;
`;

function SideBar() {
	const sideBarOpen = useRecoilValue(sideBarState);

	return <SideBarContainer isOpen={sideBarOpen} />;
}

export default SideBar;
