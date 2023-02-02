import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

import { useRecoilValue } from 'recoil';
import sideBarState from '../../recoil/sideBarState';
import { RiMenuFill, RiMenuFoldFill } from 'react-icons/ri';

const Container = styled.div`
	${({ theme }) => theme.flex.row}

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
		<Container>
			<Button onClick={handleSideBarOpen}>
				{sideBarOpen ? <RiMenuFoldFill size={24} /> : <RiMenuFill size={24} />}
			</Button>
		</Container>
	);
}

export default SideBarButton;
