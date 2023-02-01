import format from 'date-fns/format';
import React from 'react';
import styled, { css } from 'styled-components';
import useToggle from '../../hooks/useToggle';
import useValidateSchedule from '../../hooks/useValidateSchedule';

import Button from '../common/Button';

const ScheduleAdderContainer = styled.div`
	justify-content: space-around;
	gap: 2rem;
	position: fixed;

	width: 81rem;
	padding: 5.5rem;
	border-radius: 7px;

	background: ${({ theme }) => theme.colors.GRAY};
	box-shadow: -2px 2px 17px 5px rgba(0, 0, 0, 0.25);
`;

const ScheduleAdderForm = styled.form`
	${({ theme }) => theme.flex.column}

	gap: 4rem;

	height: 100%;
`;

const InputContainer = styled.div`
	${({ theme }) => theme.flex.column}
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
	${({ theme }) => theme.flex.column}
	align-items: flex-start;

	width: 100%;
	gap: 4rem;
`;

const DateTime = styled.div`
	${({ theme }) => theme.flex.row}
	justify-content: flex-start;

	position: relative;
	gap: 2.5rem;

	width: 100%;
`;

const CheckBox = styled.div`
	${({ theme }) => theme.flex.row}

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
	${({ theme }) => theme.flex.row}
	justify-content: flex-start;

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
	${({ theme }) => theme.flex.row}
	justify-content: flex-end;

	gap: 2rem;
	width: 100%;
`;

const TIMES = [
	'00:00',
	'01:00',
	'02:00',
	'03:00',
	'04:00',
	'05:00',
	'06:00',
	'07:00',
	'08:00',
	'09:00',
	'10:00',
	'11:00',
	'12:00',
	'13:00',
	'14:00',
	'15:00',
	'16:00',
	'17:00',
	'18:00',
	'19:00',
	'20:00',
	'21:00',
	'22:00',
	'23:00',
];

const MOCK_CALENDARS = ['내 캘린더', '캘린더 1', '캘린더 2'];

const getFormatDate = date => {
	return format(date, 'yyyy-MM-dd');
};

function ScheduleAdder({ closeModal, isSideBarOpen, day }) {
	const { isOpen: isAllDay, toggleClick: toggleAllDay } = useToggle(true);

	const schedule = useValidateSchedule({
		initialTitle: '',
		initialStartDate: getFormatDate(day),
		initialStartTime: '00:00',
		initialEndDate: getFormatDate(day),
		initialEndTime: '00:00',
		initialCalendar: '내 캘린더',
	});

	const handleSubmitScheduleAdderForm = e => {
		e.preventDefault();
		closeModal();
	};

	const handleAllDayButton = () => {
		toggleAllDay();
	};

	return (
		<ScheduleAdderContainer isSideBarOpen={isSideBarOpen}>
			<ScheduleAdderForm onSubmit={handleSubmitScheduleAdderForm}>
				<InputContainer>
					<ScheduleInput
						placeholder="일정 제목 추가"
						value={schedule.title.inputValue}
						onChange={schedule.title.onChangeValue}
						autoFocus
					/>
				</InputContainer>
				<hr width="100%" />
				<DateTimeContainer>
					<CheckBox>
						<input
							type="checkbox"
							id="allDay"
							checked={isAllDay}
							onClick={handleAllDayButton}
							readOnly
						/>
						<label htmlFor="allDay" />
						<label htmlFor="allDay">하루 종일</label>
					</CheckBox>
					<DateTime>
						시작
						<input
							type="date"
							value={schedule.startDate.inputValue}
							onChange={schedule.startDate.onChangeValue}
						/>
						{!isAllDay && (
							<select
								value={schedule.startTime.inputValue}
								onChange={schedule.startTime.onChangeValue}
							>
								{TIMES.map(time => {
									return <option value={time}>{time}</option>;
								})}
							</select>
						)}
					</DateTime>
					<DateTime>
						종료
						<input
							type="date"
							value={schedule.endDate.inputValue}
							onChange={schedule.endDate.onChangeValue}
						/>
						{!isAllDay && (
							<select value={schedule.endTime.inputValue} onChange={schedule.endTime.onChangeValue}>
								{TIMES.map(time => {
									return <option value={time}>{time}</option>;
								})}
							</select>
						)}
					</DateTime>
				</DateTimeContainer>

				<hr width="100%" />
				<SelectBox>
					캘린더 선택
					<select value={schedule.calendar.inputValue} onChange={schedule.calendar.onChangeValue}>
						{MOCK_CALENDARS.map(calendar => {
							return <option value={calendar}>{calendar}</option>;
						})}
					</select>
				</SelectBox>
				<hr width="100%" />
				<FormControlButtons>
					<Button css={cancelButton} onClick={closeModal}>
						취소
					</Button>
					<Button type="submit" css={saveButton}>
						저장
					</Button>
				</FormControlButtons>
			</ScheduleAdderForm>
		</ScheduleAdderContainer>
	);
}

export default ScheduleAdder;
