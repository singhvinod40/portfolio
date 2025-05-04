
import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Project from './components/Project/Project';

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project/>
      <Contact/>
    </>
  )
}

export default App
