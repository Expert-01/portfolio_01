import React, { useState, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Parallax } from "react-scroll-parallax";
import RippleGrid from './RippleGrid';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 300, 0);
  const scale = Math.max(1 - scrollY / 1000, 0.85);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #031531, #0a0a23, #031531)",
        backgroundSize: "600% 600%",
        animation: "gradientShift 20s ease infinite",
        opacity,
        transition: "opacity 0.02s ease-in-out",
      }}
    >
      {/* Ripple background */}
      <div className="absolute inset-0 -z-10">
        <RippleGrid
          enableRainbow={false}
          gridColor="red"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          glowIntensity={0.1}
          opacity={0.3}
        />
      </div>

      {/* Hero content */}
      <Parallax speed={-20}>
        <div className="text-center max-w-2xl z-10">
          {/* Name / Title */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-orbitron font-bold"
            style={{ transform: `scale(${scale})` }}
          >
            Hi, I’m Gideon
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg md:text-xl text-gray-300 font-sans"
            style={{ transform: `scale(${scale})` }}
          >
            A passionate Full‑Stack Developer building beautiful web experiences.
          </motion.p>

          {/* Call-to-action */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            className="inline-block mt-8 px-6 py-2 rounded-2xl font-semibold text-white shadow-lg transition-all"
            style={{
              background: "rgba(0, 150, 255, 0.25)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 30px rgba(0, 150, 255, 0.4)",
              border: "1px solid rgba(0, 150, 255, 0.5)",
            }}
          >
            View My Work
          </motion.a>

          {/* Animated Typewriter */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-2xl md:text-3xl font-bold mt-12 text-cyan-400"
          >
            <Typewriter
              words={["Web Developer", "UI/UX Designer", "Tech Enthusiast"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h2>
        </div>
      </Parallax>

      {/* Scroll indicator */}
      <p className="absolute bottom-10 animate-bounce text-gray-400 text-sm">
        Scroll Down
      </p>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
          100% { background-position:0% 50%; }
        }
      `}</style>
    </section>
  );
}
