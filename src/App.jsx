import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Skills" element={<Skills />} />
  <Route path="/Education" element={<Education />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/publications" element={<Publications />} />
  <Route path="/Experience" element={<Experience />} />
  <Route path="/Contact" element={<Contact />} />
</Routes>
  );
}

export default App;