import React from "react"
import { BrowserRouter as Router } from "react-router-dom";

import './App.css'
import About from "./components/about/About";
import Header from "./components/header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <div className="appContainer">
          <Header />
          <About />
          <Work />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
