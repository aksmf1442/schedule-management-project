import styled from 'styled-components';
import SideBarButton from './SideBarButton';
import { useSetRecoilState } from 'recoil';
import sideBarState from '../recoil/sideBarState';

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
	padding: 6rem 6rem 2rem 2rem;

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
	const setSideBarOpen = useSetRecoilState(sideBarState);

	const handleSideBarOpen = () => {
		setSideBarOpen(prev => !prev);
	};

	return (
		<HeaderContainer>
			<ContentBox>
				<SideBarButton handleSideBarOpen={handleSideBarOpen} />
			</ContentBox>
		</HeaderContainer>
	);
}

export default Header;
