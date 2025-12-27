import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-black ">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
    </div>
  );
};

export default App;
