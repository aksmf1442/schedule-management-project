import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
	background: transparent;

	font-family: inherit;
	text-align: center;

	cursor: pointer;

	&:hover {
		border-radius: 50%;
		background: #f1f3f5;
	}
`;

function Button({ onClick, children }) {
	return <ButtonBox onClick={onClick}>{children}</ButtonBox>;
}

export default Button;
