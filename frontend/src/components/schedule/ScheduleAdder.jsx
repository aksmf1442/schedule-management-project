import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';

const ScheduleAdderContainer = styled.div`
	justify-content: space-around;
	gap: 2rem;
	position: fixed;
	top: ${({ currentTop, weekOfMonth }) => currentTop + (weekOfMonth >= 4 ? -200 : 100)}px;
	left: ${({ currentLeft, isSideBarOpen, day }) =>
		currentLeft + (isSideBarOpen ? 256 : 0) + (day < 2 ? 0 + 190 : -330)}px;

	width: 81rem;
	padding: 5.5rem;
	border-radius: 7px;

	background: ${({ theme }) => theme.colors.GRAY};
	box-shadow: -2px 2px 17px 5px rgba(0, 0, 0, 0.25);
`;

const ScheduleAdderForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 4rem;

	height: 100%;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	position: relative;

	gap: 2.5rem;

	width: 100%;
	height: auto;

	font-size: 3.5rem;
`;

const ScheduleInput = styled.input`
	width: 100%;
	background: inherit;
	border: 0;

	font-family: inherit;
	font-size: inherit;

	&:focus {
		outline: none;
		box-shadow: 0px 0px 2px inherit;
	}
`;

const DateTimeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	gap: 4rem;
`;

const DateTime = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	position: relative;
	gap: 2.5rem;

	width: 100%;
`;

const CheckBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	gap: 1rem;

	font-size: 3rem;
	color: ${({ theme }) => theme.colors.BLACK};

	input + label {
		position: relative;

		width: 3rem;
		height: 3rem;
		border: 1px solid ${({ theme }) => theme.colors.LIGHT_BLUE};
		border-radius: 7px;

		&:hover {
			cursor: pointer;
		}
	}

	input:checked + label::after {
		content: '✓';

		position: absolute;
		top: -1px;
		left: -1px;

		width: 3rem;
		height: 3rem;
		border-radius: 7px;

		background: ${({ theme }) => theme.colors.BLUE};

		font-weight: 600;
		color: white;
		text-align: center;
	}

	input {
		display: none;
	}
`;

const SelectBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 2.5rem;

	width: 100%;
`;

const cancelButton = css`
	padding: 2rem 3rem;
	box-sizing: border-box;
	border: 1px solid ${({ theme }) => theme.colors.BLACK};
	border-radius: 7px;
	box-shadow: 0 2px 2px ${({ theme }) => theme.colors.GRAY};

	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.BLACK};
`;

const saveButton = css`
	padding: 2rem 3rem;
	box-sizing: border-box;
	border-radius: 7px;
	border: 1px solid ${({ theme }) => theme.colors.BLUE};

	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.BLUE};
`;

const FormControlButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;

	gap: 2rem;
	width: 100%;
`;

function ScheduleAdder({ currentTop, currentLeft, isSideBarOpen, day, weekOfMonth }) {
	const [isAllDay, setAllDay] = useState(true);

	const handleClickAllDayButton = () => {
		setAllDay(prev => !prev);
	};

	console.log(weekOfMonth);

	return (
		<ScheduleAdderContainer
			currentTop={currentTop}
			currentLeft={currentLeft}
			isSideBarOpen={isSideBarOpen}
			day={day}
			weekOfMonth={weekOfMonth}
		>
			<ScheduleAdderForm>
				<InputContainer>
					<ScheduleInput placeholder="일정 제목 추가" autoFocus />
				</InputContainer>
				<hr width="100%" />
				<DateTimeContainer>
					<CheckBox>
						<input
							type="checkbox"
							id="allDay"
							checked={isAllDay}
							onClick={handleClickAllDayButton}
							readOnly
						/>
						<label htmlFor="allDay" />
						<label htmlFor="allDay">하루 종일</label>
					</CheckBox>
					<DateTime>
						시작
						<input type="date" value="2023-01-12"></input>
						<select>
							<option value="00">00:00</option>
							<option value="01">01:00</option>
							<option value="02">02:00</option>
							<option value="03">03:00</option>
							<option value="04">04:00</option>
							<option value="05">05:00</option>
							<option value="06">06:00</option>
							<option value="07">07:00</option>
							<option value="08">08:00</option>
							<option value="09">09:00</option>
							<option value="10">10:00</option>
							<option value="11">11:00</option>
							<option value="12">12:00</option>
							<option value="13">13:00</option>
							<option value="14">14:00</option>
							<option value="15">15:00</option>
							<option value="16">16:00</option>
							<option value="17">17:00</option>
							<option value="18">18:00</option>
							<option value="19">19:00</option>
							<option value="20">20:00</option>
							<option value="21">21:00</option>
							<option value="22">22:00</option>
							<option value="23">23:00</option>
						</select>
					</DateTime>
					<DateTime>
						종료
						<input type="date" value="2023-01-12"></input>
						<select>
							<option value="00">00:00</option>
							<option value="01">01:00</option>
							<option value="02">02:00</option>
							<option value="03">03:00</option>
							<option value="04">04:00</option>
							<option value="05">05:00</option>
							<option value="06">06:00</option>
							<option value="07">07:00</option>
							<option value="08">08:00</option>
							<option value="09">09:00</option>
							<option value="10">10:00</option>
							<option value="11">11:00</option>
							<option value="12">12:00</option>
							<option value="13">13:00</option>
							<option value="14">14:00</option>
							<option value="15">15:00</option>
							<option value="16">16:00</option>
							<option value="17">17:00</option>
							<option value="18">18:00</option>
							<option value="19">19:00</option>
							<option value="20">20:00</option>
							<option value="21">21:00</option>
							<option value="22">22:00</option>
							<option value="23">23:00</option>
						</select>
					</DateTime>
				</DateTimeContainer>

				<hr width="100%" />
				<SelectBox>
					캘린더 선택
					<select>
						<option key="내 캘린더" value="내 캘린더">
							내 캘린더
						</option>
						<option key="캘린더 1" value="캘린더 1">
							캘린더 1
						</option>
						<option key="캘린더 2" value="캘린더 2">
							캘린더 2
						</option>
					</select>
				</SelectBox>
				<hr width="100%" />
				<FormControlButtons>
					<Button css={cancelButton}>취소</Button>
					<Button css={saveButton}>저장</Button>
				</FormControlButtons>
			</ScheduleAdderForm>
		</ScheduleAdderContainer>
	);
}

export default ScheduleAdder;
