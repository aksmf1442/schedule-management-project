import styled from 'styled-components';
import NavBarButton from './NavBarButton';
import { useSetRecoilState } from 'recoil';
import navBarState from '../recoil/navBarState';

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 15;

	width: 100%;
	height: 60px;
	padding: 6rem 6rem 3rem 3rem;

	background: white;
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
`;

const ContentBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

function Header() {
	const setNavBarOpen = useSetRecoilState(navBarState);

	const handleNavBarOpen = () => {
		setNavBarOpen(prev => !prev);
	};

	return (
		<HeaderContainer>
			<ContentBox>
				<NavBarButton handleNavBarOpen={handleNavBarOpen} />
			</ContentBox>
		</HeaderContainer>
	);
}

export default Header;
