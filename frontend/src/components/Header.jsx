import styled from 'styled-components';

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 15;
	width: 100%;
	height: 60px;
	padding: 2rem 5rem 2rem 2rem;
	background: white;
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
`;

function Header() {
	return <HeaderContainer />;
}

export default Header;
