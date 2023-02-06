import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>

      </div>
      
    </div>
  );
}

export default App;
