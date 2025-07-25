import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services"; // For Work Experience
import { Projects } from "./components/Projects"; // Modified to be projects only
import { Certifications } from "./components/Certifications"; // New component
import { Achievements } from "./components/Achievements"; // New component
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Services /> {/* My Work Experience */}
      <Projects />
      <Certifications /> {/* My Certifications */}
      <Achievements /> {/* Key Achievements */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;