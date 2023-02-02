import React from 'react';
import { useState } from 'react';
import { MdOutlineModeEdit, MdOutlineCheck } from 'react-icons/md';
import styled, { css } from 'styled-components';
import useToggle from '../../hooks/useToggle';
import Button from '../common/Button';

const Container = styled.div`
	${({ theme }) => theme.flex.column}
	justify-content: space-around;

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

const Image = styled.img`
	width: 35rem;
	height: 35rem;
	border-radius: 50%;
`;

const Content = styled.div`
	${({ theme }) => theme.flex.column}

	gap: 3rem;

	width: 100%;

	text-align: center;
`;

const NicknameEditterForm = styled.form`
	${({ theme }) => theme.flex.row}
	justify-content: flex-end;

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

const Nickname = styled.span`
	margin-left: 7rem;

	font-size: 3.5rem;
`;

const NicknameEditButtonBox = styled.div`
	${({ theme }) => theme.flex.row}

	gap: 3rem;
`;

const Email = styled.span`
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
	const [nickname, setNickname] = useState('');
	const { isOpen: isEditingNickname, toggleClick: toggleIsEditingNickname } = useToggle();

	const onChangeNickname = ({ target }) => {
		if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) {
			setNickname(target.value);
		}
	};

	const handleSubmitProfileEditterForm = e => {
		e.preventDefault();
		toggleIsEditingNickname();
	};

	return (
		<Container>
			<Image />
			<Content>
				{isEditingNickname ? (
					<NicknameEditterForm onSubmit={handleSubmitProfileEditterForm}>
						<NicknameEditterInput value={nickname} onChange={onChangeNickname} autoFocus={true} />
						<Button type="submit" css={nicknameEditterSaveButtonStyle}>
							<MdOutlineCheck size={14} />
						</Button>
					</NicknameEditterForm>
				) : (
					<NicknameEditButtonBox>
						<Nickname>{nickname}</Nickname>
						<Button onClick={toggleIsEditingNickname}>
							<MdOutlineModeEdit size={14} />
						</Button>
					</NicknameEditButtonBox>
				)}
				<Email>aksmf1442@gmail.com</Email>
			</Content>
			<Button css={logoutButtonStyle}>로그아웃</Button>
		</Container>
	);
}

export default Profile;
