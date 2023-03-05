import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
