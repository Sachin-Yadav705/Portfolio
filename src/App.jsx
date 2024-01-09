import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Works,
  Education,
  Contact,
  ParticlesComponent,
} from "./Components";

function App() {
  return (
    <BrowserRouter>
      <ParticlesComponent />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Education />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
