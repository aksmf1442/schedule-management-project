import React from 'react';
import { MdSearch } from 'react-icons/md';
import styled, { css } from 'styled-components';
import useInput from '../../../hooks/useInput';
import Button from '../../common/Button';

const Container = styled.div`
	margin-top: 8rem;
	align-self: center;

	width: 85%;
`;

const SearchControl = styled.div`
	${({ theme }) => theme.flex.row}
	align-items: flex-start;

	width: 100%;

	gap: 4rem;
`;

const SearchForm = styled.form`
	position: relative;

	width: 100%;
	height: 12rem;
	margin-bottom: 5rem;
`;

const searchButtonStyle = css`
	position: absolute;
	z-index: 5;

	top: 50%;
	transform: translateY(-50%);

	width: 10rem;
`;

const SearchInput = styled.input`
  padding: 3rem;

  width: 100%;
  height: 100%;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};

  font-size: 4rem;
  padding-left: 10rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.BLUE};
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.BLUE};
`;

const SearchResultHeader = styled.div`
	${({ theme }) => theme.flex.row}
	justify-content: space-around;

	width: 100%;
	height: 12rem;
	border-bottom: 2px solid ${({ theme }) => theme.colors.GRAY};

	background: ${({ theme }) => theme.colors.LIGHT_BLUE};

	font-size: 4rem;
	font-weight: 700;
`;

const SearchResultHeaderContent = styled.span`
	flex: 1 1 0;
	text-align: center;
`;

const SearchResults = styled.div`
	overflow: hidden;

	width: 100%;
	height: calc(100vh - 66rem);

	&:hover {
		overflow-y: overlay;
	}
`;

const SearchResultBox = styled.div`
	${({ theme }) => theme.flex.row}
	justify-content: space-around;
	position: relative;

	height: 15rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};

	font-size: 4rem;
`;

const SearchResult = styled.span`
	flex: 1 1 0;

	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const subscribeButtonStyle = css`
	width: 18rem;

	color: ${({ theme }) => theme.colors.BLUE};
	${({ theme }) => theme.buttons.save}
	font-weight: 700;
	font-size: 3rem;
`;

function SubsribeSearchControl() {
	const { inputValue: calendarTitle, onChangeValue: onChangeCalendarTitle } = useInput();

	const handleSubmitSearchForm = e => {
		e.preventDefault();
	};

	return (
		<Container>
			<SearchControl>
				<SearchForm onSubmit={handleSubmitSearchForm}>
					<Button type="submit" css={searchButtonStyle}>
						<MdSearch size={24} />
					</Button>
					<SearchInput
						value={calendarTitle}
						onChange={onChangeCalendarTitle}
						placeholder="캘린더명 검색"
						autoFocus={true}
					/>
				</SearchForm>
			</SearchControl>
			<>
				<SearchResultHeader>
					<SearchResultHeaderContent>캘린더</SearchResultHeaderContent>
					<SearchResultHeaderContent>관리자</SearchResultHeaderContent>
					<SearchResultHeaderContent />
				</SearchResultHeader>
				<SearchResults>
					<SearchResultBox>
						<SearchResult>캘린더 제목</SearchResult>
						<SearchResult>닉네임</SearchResult>
						<SearchResult>
							<Button css={subscribeButtonStyle}>구독</Button>
						</SearchResult>
					</SearchResultBox>
				</SearchResults>
			</>
		</Container>
	);
}

export default SubsribeSearchControl;
