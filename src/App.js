import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome/Welcome';
import Projects from './Projects/Projects';
import Contacts from './Contact/Contacts';
import About from './About/About';

function App() {
  return (
    <div className="App">
      Hello world
      <Welcome />
      <Projects />
      <Contacts />
      <About />
    </div>
  );
}

export default App;
