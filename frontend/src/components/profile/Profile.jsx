import React from 'react';
import { MdOutlineModeEdit, MdOutlineCheck } from 'react-icons/md';
import styled, { css } from 'styled-components';
import useToggle from '../../hooks/useToggle';
import Button from '../common/Button';

const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	gap: 5rem;
	position: absolute;
	top: 15rem;
	right: 2rem;

	width: 60rem;
	padding: 5rem;
	box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
	border-radius: 7px;

	background: ${({ theme }) => theme.colors.WHITE};

	font-size: 4rem;
`;

const ImageContainer = styled.img`
	width: 35rem;
	height: 35rem;
	border-radius: 50%;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 3rem;

	width: 100%;

	text-align: center;
`;

const NicknameEditterForm = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;

	gap: 2rem;

	font-size: 3rem;
`;

const NicknameEditterInput = styled.input`
  padding: 3rem;

  width: 100%;
  height: 3rem;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};

  font-family: inherit;
  font-size: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.BLUE};
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.BLUE};
	height: 3rem;

	font-size: 3rem;
`;

const nicknameEditterSaveButtonStyle = css`
	position: relative;

	width: 9rem;
	height: 9rem;

	&:hover {
		border-radius: 50%;

		background: ${({ theme }) => theme.colors.GRAY};

		filter: none;
	}

	&:hover span {
		visibility: visible;
	}
`;

const NicknameEditterSaveButtonTitle = styled.span`
	visibility: hidden;
	position: absolute;
	top: 120%;
	left: 50%;
	transform: translateX(-50%);

	padding: 2rem 3rem;

	background: ${({ theme }) => theme.colors.GRAY}ee;

	font-size: 3rem;
	font-weight: normal;
	color: ${({ theme }) => theme.colors.WHITE};
	white-space: nowrap;
`;

const Nickname = styled.span`
	margin-left: 7rem;

	font-size: 3.5rem;
`;

const NicknameEditButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	gap: 3rem;
`;

const EmailText = styled.span`
	font-size: 3rem;
	color: ${({ theme }) => theme.colors.LIGHT_BLACK};
`;

const logoutButtonStyle = css`
	padding: 2rem 3rem;
	border: 1px solid ${({ theme }) => theme.colors.LIGHT_BLACK};
	border-radius: 7px;

	font-size: 3rem;
`;

function Profile() {
	const { isOpen: isEditingNickname, toggleClick: toggleIsEditingNickname } = useToggle();

	return (
		<ProfileContainer>
			<ImageContainer />
			<ContentContainer>
				{isEditingNickname ? (
					<NicknameEditterForm>
						<NicknameEditterInput autoFocus={true} />
						<Button type="submit" cssProp={nicknameEditterSaveButtonStyle}>
							<MdOutlineCheck size={14} />
							<NicknameEditterSaveButtonTitle>완료</NicknameEditterSaveButtonTitle>
						</Button>
					</NicknameEditterForm>
				) : (
					<NicknameEditButtonContainer>
						<Nickname>하늘</Nickname>
						<Button onClick={toggleIsEditingNickname}>
							<MdOutlineModeEdit size={14} />
						</Button>
					</NicknameEditButtonContainer>
				)}
				<EmailText>aksmf1442@gmail.com</EmailText>
			</ContentContainer>
			<Button css={logoutButtonStyle}>로그아웃</Button>
		</ProfileContainer>
	);
}

export default Profile;
