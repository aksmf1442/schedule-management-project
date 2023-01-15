import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, ResetStyle } from './style/GlobalStyle';
import theme from './style/theme.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ThemeProvider theme={theme}>
		<ResetStyle />
		<GlobalStyle />
		<App />
	</ThemeProvider>,
);
