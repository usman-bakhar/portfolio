import React from "react";

// import Router from './routes/Router'

import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";

import "./styles/global.css";
import Works from "./pages/Works";
import Experience from "./pages/Experience";
import HireMe from "./pages/HireMe";

function App() {
  return (
    <>
      {/* <Router /> */}z
      <Hero />
      <About />
      <Services />
      <Works />
      <Experience />
      <HireMe />
    </>
  );
}

export default App;
