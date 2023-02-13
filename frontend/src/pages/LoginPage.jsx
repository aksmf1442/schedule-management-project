import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../components/common/Button';

import { FcGoogle } from 'react-icons/fc';
import { GOOGLE_LOGIN_URI } from '../constants/login';

const Container = styled.div`
	${({ theme }) => theme.flex.row}
	margin-top: 50vh;
`;

const loginButtonStyle = css`
	${({ theme }) => theme.flex.row}

	width: 50rem;
	height: 15rem;
	padding: 4.3rem;
	border-radius: 6px;
	border: 1px solid ${({ theme }) => theme.colors.GRAY};
	box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.GRAY};

	background: ${({ theme }) => theme.colors.WHITE};

	font-size: 4rem;
	color: ${({ theme }) => theme.colors.BLACK};

	&:hover {
		border-radius: 6px;
		box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.GRAY};
	}
`;

const loginIconStyle = css`
	font-size: 5rem;
`;

const LoginText = styled.p`
	width: 100%;
`;
function LoginPage() {
	return (
		<Container>
			<a href={GOOGLE_LOGIN_URI}>
				<Button css={loginButtonStyle}>
					<FcGoogle css={loginIconStyle} />
					<LoginText>Google 로그인</LoginText>
				</Button>
			</a>
		</Container>
	);
}

export default LoginPage;
