import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SampleCarousel from "./components/ProjectCarousel";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import LogoIntro from "./components/LogoIntro"; // 👈 Import the intro animation

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {/* Intro overlay animation */}
      {!showMain && <LogoIntro onComplete={() => setShowMain(true)} />}

      {/* Main site content */}
      {showMain && (
        <div className="w-full overflow-x-hidden">
          <Navbar />
          <Hero />
          <About />
          <SampleCarousel />
          <Skills />
          <Contact />
          <ThemeToggle />
          <Projects />
          <ContactMe />
        </div>
      )}
    </>
  );
}

export default App;