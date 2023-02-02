import { css } from 'styled-components';

const colors = {
	GRAY: '#dee2e6',
	RED: '#ff8787',
	LIGHT_BLUE: '#C8DCFB',
	BLUE: '#1A49B1',
	LIGHT_BLACK: '#60656A',
	BLACK: '#2E3133',
	WHITE: 'white',
};

const flex = {
	row: css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	`,
	column: css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`,
};

const buttons = {
	cancle: css`
		padding: 2rem 3rem;
		box-sizing: border-box;
		border-radius: 7px;
		border: 1px solid ${({ theme }) => theme.colors.BLACK};

		font-size: 1.5rem;
		color: ${({ theme }) => theme.colors.BLACK};
	`,
	save: css`
		padding: 2rem 3rem;
		box-sizing: border-box;
		border-radius: 7px;
		border: 1px solid ${({ theme }) => theme.colors.BLUE};

		font-size: 1.5rem;
		color: ${({ theme }) => theme.colors.BLUE};
	`,
};

const TRANSPARENT = 'transparent';

const theme = {
	colors,
	flex,
	TRANSPARENT,
	buttons,
};

export default theme;
