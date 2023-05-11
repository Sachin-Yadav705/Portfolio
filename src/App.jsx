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
} from "./Components";

function App() {
  return (
    <BrowserRouter>
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
