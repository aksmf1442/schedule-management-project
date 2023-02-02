import React from 'react';
import { MdClose } from 'react-icons/md';
import styled, { css } from 'styled-components';
import Button from '../../common/Button';
import CalendarManager from './CalendarManager';

const Container = styled.div`
	${({ theme }) => theme.flex.column}
	justify-content: space-between;

	gap: 10rem;
	overflow: overlay;
	position: relative;

	max-height: 80vh;
	padding: 12.5rem;
	border-radius: 7px;

	background: ${({ theme }) => theme.colors.WHITE};
`;

const Header = styled.h1`
	font-size: 6rem;

	color: ${({ theme }) => theme.colors.GRAY};
`;

const closeButtonStyle = css`
	position: absolute;
	top: 6rem;
	right: 6rem;

	font-size: 6rem;
`;

const Section = styled.section`
	width: 100%;
`;

const SectionTitle = styled.h2`
	margin-bottom: 3rem;

	font-size: 4rem;
	font-weight: 500;
`;

const SectionForm = styled.form`
	${({ theme }) => theme.flex.row}
	align-items: flex-start;
	justify-content: space-between;

	width: 100%;
`;

const SectionRenameInputStyle = styled.input`
	width: 80%;
	height: 8rem;
	font-size: 4rem;
`;

const sectionRenameButtonStyle = css`
	height: 8rem;

	${({ theme }) => theme.buttons.save};
`;

const Managers = styled.div`
	overflow: hidden;

	width: 60rem;
	max-height: 50rem;
	padding-right: 2rem;
	border: 1px solid ${({ theme }) => theme.colors.GRAY};

	&:hover {
		overflow: overlay;
	}
`;

function CalendarModifier({ closeModal }) {
	return (
		<Container>
			<Header>캘린더 관리</Header>
			<Button css={closeButtonStyle} onClick={closeModal}>
				<MdClose />
			</Button>
			<Section>
				<SectionTitle>캘린더 제목 수정</SectionTitle>
				<SectionForm>
					<SectionRenameInputStyle placeholder="캘린더 제목" autoFocus />
					<Button type="submit" css={sectionRenameButtonStyle}>
						수정
					</Button>
				</SectionForm>
			</Section>
			<Section>
				<SectionTitle>편집자 목록</SectionTitle>
				<Managers>
					<CalendarManager user={'하늘'} />
				</Managers>
			</Section>
			<Section>
				<SectionTitle>구독자 목록</SectionTitle>
				<Managers>
					<CalendarManager user={'하늘'} />
				</Managers>
			</Section>
		</Container>
	);
}

export default CalendarModifier;
