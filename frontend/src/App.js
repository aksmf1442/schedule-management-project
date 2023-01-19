import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SideBar from './components/sidebar/SideBar';
import CalendarPage from './pages/CalendarPage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<SideBar />
				<Routes>
					<Route path="" element={<CalendarPage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
