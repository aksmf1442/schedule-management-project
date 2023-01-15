import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
	width: 72rem;
	height: 100vh;
	border: 1px solid #ced4da;
	background: white;
`;

function NavBar() {
	return <NavBarContainer />;
}

export default NavBar;
