import './App.css';
import Header from './components/Header';
import SideBar from './components/sidebar/SideBar';
import CalendarPage from './pages/CalendarPage';

function App() {
	return (
		<>
			<Header />
			<SideBar />
			<CalendarPage />
		</>
	);
}

export default App;
