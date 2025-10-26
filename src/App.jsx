import React, { useState } from "react";
import LogoIntro from "./components/LogoIntro";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import SampleCarousel from "./components/ProjectCarousel";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    
<div className="w-full overflow-x-hidden text-white">
      {!introDone && <LogoIntro onComplete={() => setIntroDone(true)} />}
      {introDone && (
        <>
          <Navbar />
          <Hero />
          <About />
          <SampleCarousel />
          <Skills />
          <Projects />
          <Contact />
          <ThemeToggle />
          <ContactMe />
        </>
      )}
    </div>
  );
}

export default App;

