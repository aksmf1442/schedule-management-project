import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import SearchBar from './components/searchbar/SearchBar';
import SideBar from './components/sidebar/SideBar';
import CalendarPage from './pages/CalendarPage';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<SideBar />
			<SearchBar />
			<Routes>
				<Route path="" element={<CalendarPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
