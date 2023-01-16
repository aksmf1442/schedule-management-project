import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import navBarState from '../recoil/navBarState';

const NavBarContainer = styled.div`
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

function NavBar() {
	const navBarOpen = useRecoilValue(navBarState);

	return <NavBarContainer isOpen={navBarOpen} />;
}

export default NavBar;
