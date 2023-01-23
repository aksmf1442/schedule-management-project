import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
	${({ css }) => css}
	background: transparent;

	font-family: inherit;
	text-align: center;

	cursor: pointer;

	&:hover {
		border-radius: 10%;
		background: ${({ theme }) => theme.colors.GRAY};
	}
`;

function Button({ type, css, onClick, children, ...props }) {
	return (
		<ButtonBox {...props} type={type} css={css} onClick={onClick}>
			{children}
		</ButtonBox>
	);
}

export default Button;
