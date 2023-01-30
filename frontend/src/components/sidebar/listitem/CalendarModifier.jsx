import React from 'react';
import { MdClose } from 'react-icons/md';
import styled, { css } from 'styled-components';
import Button from '../../common/Button';
import CalendarManager from './CalendarManager';

const CalendarModifierContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	gap: 10rem;
	overflow: overlay;
	position: relative;

	max-height: 80vh;
	padding: 12.5rem;
	border-radius: 7px;

	background: ${({ theme }) => theme.colors.WHITE};
`;

const CalendarModifierHeader = styled.h1`
	font-size: 6rem;
`;

const closeModalButtonStyle = css`
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
	font-weight: 700;
`;

const SectionForm = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	align-items: flex-start;
	justify-content: space-between;
	gap: 20rem;

	width: 100%;
`;

const SectionRenameInputStyle = styled.input`
	width: 40%%;
	height: 8rem;
	font-size: 4rem;
`;

const sectionRenameButtonStyle = css`
	height: 8rem;
	padding: 2rem;
	border-radius: 7px;
	box-shadow: 0 2px 2px ${({ theme }) => theme.colors.GRAY};

	background: ${({ theme }) => theme.colors.BLUE};

	font-size: 3rem;
	color: ${({ theme }) => theme.colors.WHITE};
`;

const ManagerList = styled.div`
	overflow: hidden;

	width: 60rem;
	max-height: 50rem;
	padding-right: 2rem;
	border: 1px solid ${({ theme }) => theme.colors.GRAY};

	&:hover {
		overflow: overlay;
	}
`;

function CalendarModifier() {
	return (
		<CalendarModifierContainer>
			<CalendarModifierHeader>캘린더 관리</CalendarModifierHeader>
			<Button css={closeModalButtonStyle}>
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
				<ManagerList>
					<CalendarManager user={'하늘'} />
				</ManagerList>
			</Section>

			<Section>
				<SectionTitle>구독자 목록</SectionTitle>
				<ManagerList>
					<CalendarManager user={'하늘'} />
				</ManagerList>
			</Section>
		</CalendarModifierContainer>
	);
}

export default CalendarModifier;
