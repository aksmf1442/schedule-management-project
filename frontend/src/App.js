import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Header from './components/header/Header';
import SearchBar from './components/searchbar/SearchBar';
import SideBar from './components/sidebar/SideBar';
import CalendarPage from './pages/CalendarPage';
import GoogleCallbackPage from './pages/GoogleCallbackPage';
import LoginPage from './pages/LoginPage';
import userState from './recoil/userState';

function App() {
	const accessToken = useRecoilValue(userState);

	return (
		<BrowserRouter>
			<Header />
			<SideBar />
			<SearchBar />
			<Routes>
				<Route path="/" element={accessToken ? <CalendarPage /> : <LoginPage />} />
				<Route path="/google/callback" element={<GoogleCallbackPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
