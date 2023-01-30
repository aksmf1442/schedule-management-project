import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SideBarButton from '../sidebar/SideBarButton';
import { useSetRecoilState } from 'recoil';
import sideBarState from '../../recoil/sideBarState';
import searchBarState from '../../recoil/searchBarState';
import Button from '../common/Button';

import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import ModalPortal from '../common/ModalPortal';
import useToggle from '../../hooks/useToggle';
import Profile from '../profile/Profile';

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
	padding: 2rem 3rem 2rem 2rem;

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
	const setSearchBarOpen = useSetRecoilState(searchBarState);

	const { isOpen: isProfileModalOpen, toggleClick: toggleProfileModalOpen } = useToggle();

	const handleSideBarOpen = () => {
		setSideBarOpen(prev => !prev);
	};

	const handleSearchBarOpen = () => {
		setSearchBarOpen(prev => !prev);
	};

	const handleClickMainButton = () => {
		navigate('');
	};

	const handleClickProfileMenuButton = () => {
		toggleProfileModalOpen();
	};

	return (
		<>
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
						<Button onClick={handleSearchBarOpen}>
							<AiOutlineSearch size={24} />
						</Button>
					</Content>
					<Content>
						<Button onClick={handleClickProfileMenuButton}>
							<AiOutlineUser size={24} />
						</Button>
					</Content>
				</ContentBox>
			</HeaderContainer>
			<ModalPortal
				isOpen={isProfileModalOpen}
				closeModal={toggleProfileModalOpen}
				dimmerBackground={'transparent'}
			>
				<Profile />
			</ModalPortal>
		</>
	);
}

export default Header;
