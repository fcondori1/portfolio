import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import 'animate.css';

function App() {
	const { pathname } = useLocation();
	return (
		<div className='App'>
			{/* {pathname !== '/' && <Nav />} */}
			<Nav />
			<Routes>
				{/* <Route path='/' element={<Welcome />} /> */}
				<Route path='/' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
