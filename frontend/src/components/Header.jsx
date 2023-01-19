import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SideBarButton from './sidebar/SideBarButton';
import { useSetRecoilState } from 'recoil';
import sideBarState from '../recoil/sideBarState';
import Button from './common/Button';

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
	height: 64px;
	padding: 2rem 6rem 2rem 2rem;

	background: white;
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
`;

const ContentBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const ContentText = styled.span`
	color: ${({ theme }) => theme.colors.LIGHT_BLACK};
	font-size: 5rem;
	font-weight: bold;
`;

function Header() {
	const navigate = useNavigate();
	const setSideBarOpen = useSetRecoilState(sideBarState);

	const handleSideBarOpen = () => {
		setSideBarOpen(prev => !prev);
	};

	const handleClickMainButton = () => {
		navigate('');
	};

	return (
		<HeaderContainer>
			<ContentBox>
				<SideBarButton handleSideBarOpen={handleSideBarOpen} />
				<Button onClick={handleClickMainButton}>
					<ContentText>일치</ContentText>
				</Button>
			</ContentBox>
		</HeaderContainer>
	);
}

export default Header;
