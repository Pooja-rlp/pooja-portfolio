import './App.css';
import Footer from './components/footer/footer.component';
import Navbar from './components/navbar/navbar.component';
import About from './pages/about/about.component';
import Certifications from './pages/certificates/certificates.component';
import Contact from './pages/contact/contact.component';
import Education from './pages/education/education.component';
import Home from './pages/home/home.component';
import Projects from './pages/projects/projects.component';
import Skills from './pages/skills/skills.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
