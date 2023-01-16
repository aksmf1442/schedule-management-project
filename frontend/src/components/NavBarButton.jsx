import React from 'react';
import styled from 'styled-components';
import Button from './utils/Button';

import { useRecoilValue } from 'recoil';
import navBarState from '../recoil/navBarState';
import { RiMenuFill, RiMenuFoldFill } from 'react-icons/ri';

const NavBarButtonContainer = styled.div`
	position: relative;

	width: 11rem;
	height: 11rem;

	background: transparent;

	font-size: 7rem;
	font-weight: bold;
	color: white;

	&:hover {
		border-radius: 50%;

		background: white;
	}

	&:hover span {
		visibility: visible;
	}
`;

function NavBarButton({ handleNavBarOpen }) {
	const navBarOpen = useRecoilValue(navBarState);
	return (
		<NavBarButtonContainer>
			<Button onClick={handleNavBarOpen}>
				{navBarOpen ? <RiMenuFoldFill size={27} /> : <RiMenuFill size={27} />}
			</Button>
		</NavBarButtonContainer>
	);
}

export default NavBarButton;
