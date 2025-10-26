import React, { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import LogoIntro from "./components/LogoIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SampleCarousel from "./components/ProjectCarousel";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import ContactMe from "./components/ContactMe";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <ParallaxProvider>
      <div className="w-full overflow-x-hidden text-white relative">
        {/* LogoIntro plays on top */}
        {!introDone && (
          <LogoIntro
            onComplete={() => setIntroDone(true)}
          />
        )}

        {/* Main content stays mounted, just hidden until intro completes */}
        <div
          className={`transition-opacity duration-700 ${
            introDone ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <Navbar />
          <Hero />
          <About />
          <SampleCarousel />
          <Skills />
          <Projects />
          <Contact />
          <ThemeToggle />
          <ContactMe />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;