import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from "react-router-dom"

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" exact element={<Home />} />
    //     <Route path="#about" element={<About />} />
    //     <Route path="#experience" element={<Experience />} />
    //     <Route path="#projects" element={<Projects />} />
    //     <Route path="#skills" element={<Skills />} />
    //     <Route path="#contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' exact component={Home} />
    //     <Route path='/about' component={About} />
    //     <Route path='/experience' component={Experience} />
    //     <Route path='/projects' component={Projects} />
    //     <Route path='/skills' component={Skills} />
    //     <Route path='/contact' component={Contact} />
    //   </Routes>
    // </Router>
    <div className="App">
      <Navbar />
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
