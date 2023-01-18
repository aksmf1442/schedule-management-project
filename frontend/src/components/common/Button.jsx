import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
	${({ css }) => css}
	background: transparent;

	font-family: inherit;
	text-align: center;

	cursor: pointer;

	&:hover {
		border-radius: 50%;
		background: ${({ theme }) => theme.colors.GRAY};
	}
`;

function Button({ css, onClick, children }) {
	return (
		<ButtonBox css={css} onClick={onClick}>
			{children}
		</ButtonBox>
	);
}

export default Button;
