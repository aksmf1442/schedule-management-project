import React from 'react';
import { MdPersonOff } from 'react-icons/md';
import styled, { css } from 'styled-components';
import Button from '../../common/Button';

const CalendarManagerConatiner = styled.div`
	${({ theme }) => theme.flex.row}
	justify-content: flex-start;

	gap: 2rem;
	position: relative;

	height: 7rem;
	padding: 6rem 2rem;
	box-shadow: 0 2px 2px ${({ theme }) => theme.colors.GRAY};

	font-size: 4rem;

	&:hover {
		background: ${({ theme }) => theme.colors.GRAY};
	}
`;

const Image = styled.img`
	width: 7rem;
	height: 7rem;
	border-radius: 50%;
`;

const Name = styled.span`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const managerButtonStyle = css`
	position: absolute;
	right: 1rem;

	font-size: 5rem;
	line-height: 7rem;

	&:hover {
		transform: scale(1.1);
	}
`;

function CalendarManager({ user }) {
	return (
		<CalendarManagerConatiner>
			<Image />
			<Name>{user}</Name>
			<Button css={managerButtonStyle}>
				<MdPersonOff />
			</Button>
		</CalendarManagerConatiner>
	);
}

export default CalendarManager;
