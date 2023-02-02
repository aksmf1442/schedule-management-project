import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import sideBarState from '../../recoil/sideBarState';
import searchBarState from '../../recoil/searchBarState';
import Button from '../common/Button';

import { RiMenuFill } from 'react-icons/ri';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import ModalPortal from '../common/ModalPortal';
import useToggle from '../../hooks/useToggle';
import Profile from '../profile/Profile';

const Container = styled.div`
	${({ theme }) => theme.flex.row}
	justify-content: space-between;

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

const Contents = styled.div`
	${({ theme }) => theme.flex.row}
`;

const Content = styled.div`
	margin-right: 3rem;
`;

const ContentButtonText = styled.span`
	color: ${({ theme }) => theme.colors.LIGHT_BLACK};
	font-size: 5rem;
	font-weight: bold;
`;

const sideBarButtonStyle = css`
	position: relative;

	margin-left: 1.8rem;

	top: 0.6rem;

	background: transparent;

	font-size: 7rem;
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

	const handleClickHomeButton = () => {
		navigate('');
	};

	const handleClickProfileButton = () => {
		toggleProfileModalOpen();
	};

	return (
		<>
			<Container>
				<Contents>
					<Content>
						<Button css={sideBarButtonStyle} onClick={handleSideBarOpen}>
							<RiMenuFill size={24} />
						</Button>
					</Content>
					<Content>
						<Button onClick={handleClickHomeButton}>
							<ContentButtonText>일치</ContentButtonText>
						</Button>
					</Content>
				</Contents>
				<Contents>
					<Content>
						<Button onClick={handleSearchBarOpen}>
							<AiOutlineSearch size={24} />
						</Button>
					</Content>
					<Content>
						<Button onClick={handleClickProfileButton}>
							<AiOutlineUser size={24} />
						</Button>
					</Content>
				</Contents>
			</Container>
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
