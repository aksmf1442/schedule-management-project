import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

import { useRecoilValue } from 'recoil';
import sideBarState from '../../recoil/sideBarState';
import { RiMenuFill, RiMenuFoldFill } from 'react-icons/ri';

const SideBarButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	position: relative;

	width: 11rem;
	height: 11rem;

	top: 0.6rem;

	background: transparent;

	font-size: 7rem;
	font-weight: bold;

	&:hover {
		border-radius: 50%;

		background: white;
	}
`;

function SideBarButton({ handleSideBarOpen }) {
	const sideBarOpen = useRecoilValue(sideBarState);
	return (
		<SideBarButtonContainer>
			<Button onClick={handleSideBarOpen}>
				{sideBarOpen ? <RiMenuFoldFill size={24} /> : <RiMenuFill size={24} />}
			</Button>
		</SideBarButtonContainer>
	);
}

export default SideBarButton;
