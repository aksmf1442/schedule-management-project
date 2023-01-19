import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SideBarButton from './sidebar/SideBarButton';
import { useSetRecoilState } from 'recoil';
import sideBarState from '../recoil/sideBarState';
import Button from './common/Button';

import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

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

const Content = styled.div`
	margin-right: 3rem;
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
				<Content>
					<SideBarButton handleSideBarOpen={handleSideBarOpen} />
				</Content>
				<Content>
					<Button onClick={handleClickMainButton}>
						<ContentText>일치</ContentText>
					</Button>
				</Content>
			</ContentBox>
			<ContentBox>
				<Content>
					<Button>
						<AiOutlineSearch size={24} />
					</Button>
				</Content>
				<Content>
					<Button>
						<AiOutlineUser size={24} />
					</Button>
				</Content>
			</ContentBox>
		</HeaderContainer>
	);
}

export default Header;
