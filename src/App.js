import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import About from './About/About';
import Nav from './Nav/Nav';

function App() {
  return (
		<div className='App'>
      <Nav />
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
