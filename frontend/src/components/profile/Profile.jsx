import React from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';
import styled, { css } from 'styled-components';
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

const Nickname = styled.span`
	margin-left: 7rem;

	font-size: 3.5rem;
`;

const NickNameEditContainer = styled.div`
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
	return (
		<ProfileContainer>
			<ImageContainer />
			<ContentContainer>
				<NickNameEditContainer>
					<Nickname>하늘</Nickname>
					<Button>
						<MdOutlineModeEdit size={14} />
					</Button>
				</NickNameEditContainer>
				<EmailText>aksmf1442@gmail.com</EmailText>
			</ContentContainer>
			<Button css={logoutButtonStyle}>로그아웃</Button>
		</ProfileContainer>
	);
}

export default Profile;
