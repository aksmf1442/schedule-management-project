import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
	background: ${({ color }) => (color ? color : 'transparent')};

	font-family: inherit;
	text-align: center;

	cursor: pointer;

	&:hover {
		border-radius: 10%;
		background: ${({ theme, color }) => (color ? color : theme.colors.GRAY)};
	}
	${({ css }) => css}
`;

function Button({ type, css, onClick, children, color, ...props }) {
	return (
		<Container {...props} type={type} css={css} color={color} onClick={onClick}>
			{children}
		</Container>
	);
}

export default Button;
