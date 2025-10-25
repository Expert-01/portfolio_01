import React from "react";
//import  ParallaxImage  from "./components/ParallaxImage";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
//import ProjectCarousel from "./components/ProjectCarousel";
import SampleCarousel from "./components/ProjectCarousel";
import About from "./components/About";
import ContactMe from "./components/ContactMe";


function App() {
  return (

    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About/>
      <SampleCarousel />
      <Skills />
      <Contact />
      <ThemeToggle />
     {/* <ProjectCarousel />
     */} 
      <Projects />
      {/* <ParallaxImage /> */}
      <ContactMe/>
    </div>
  );
}

export default App;