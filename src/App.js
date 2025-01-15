import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Project from './Components/Project';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience/>
      <Education/>
      <Project/>
      <Skills/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
