import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
	position: absolute;
	z-index: 10;
	width: 72rem;
	height: 100vh;
	border: 1px solid #ced4da;
	background: white;
`;

function NavBar() {
	return <NavBarContainer />;
}

export default NavBar;
