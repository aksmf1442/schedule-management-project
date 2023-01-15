import styled from 'styled-components';

const HeaderContainer = styled.div`
	width: 100%;
	height: 60px;
	padding: 12px;
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
`;

function Header() {
	return <HeaderContainer />;
}

export default Header;
