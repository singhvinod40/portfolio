
import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import ExperienceSection from './components/Expirence/ExperienceSection';


function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <ExperienceSection/>
      <Contact/>
    </>
  )
}

export default App
