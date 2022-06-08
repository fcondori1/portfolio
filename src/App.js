import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
// import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import 'animate.css';
import Footer from './components/Footer/Footer';

function App() {
	// const { pathname } = useLocation();
	return (
		<div className='App'>
			<Nav />
			<Routes>
				{/* <Route path='/' element={<Welcome />} /> */}
				<Route path='/' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
