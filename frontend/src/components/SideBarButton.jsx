import React from 'react';
import styled from 'styled-components';
import Button from './utils/Button';

import { useRecoilValue } from 'recoil';
import sideBarState from '../recoil/sideBarState';
import { RiMenuFill, RiMenuFoldFill } from 'react-icons/ri';

const SideBarButtonContainer = styled.div`
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

function SideBarButton({ handleSideBarOpen }) {
	const sideBarOpen = useRecoilValue(sideBarState);
	return (
		<SideBarButtonContainer>
			<Button onClick={handleSideBarOpen}>
				{sideBarOpen ? <RiMenuFoldFill size={27} /> : <RiMenuFill size={27} />}
			</Button>
		</SideBarButtonContainer>
	);
}

export default SideBarButton;
