import React from 'react';
import { motion } from 'framer-motion';
import DecryptedText from './DecryptedText';

export default function About() {
  return (
    <section
      className="relative py-32 px-12 text-gray-300 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000, #0a0a10, #031531)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 25s ease infinite"
      }}
    >
      {/* Optional abstract shape / 3D visual */}
      <div className="absolute top-10 right-0 -z-10 w-72 h-72 bg-cyan-500 rounded-full opacity-10 animate-pulse hidden md:block"></div>

      {/* Title */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-6xl md:text-8xl font-orbitron font-bold mb-12 text-left"
      >
        <DecryptedText
          text="About Me"
          speed={70}
          maxIterations={20}
          characters="AboutMe!@#$%^&*"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
          animateOn="view"
        />
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-lg md:text-xl leading-relaxed text-left"
      >
        I'm a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> passionate about building efficient, scalable, and beautiful digital solutions.
        With a strong foundation in <span className="text-cyan-400 font-semibold">JavaScript, React, Node.js, PostgreSQL</span>, I enjoy solving real-world problems and constantly learning new tech.
      </motion.p>

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
