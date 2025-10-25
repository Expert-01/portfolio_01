
import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import DecryptedText from './DecryptedText';

export default function About() {
  return (
    <section
      className="relative py-20 px-6 text-center text-gray-300 rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a23, #031531)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 25s ease infinite"
      }}
    >
      {/* Optional abstract shape / 3D visual */}
      <div className="absolute top-0 right-0 -z-10 w-60 h-60 bg-cyan-500 rounded-full opacity-10 animate-pulse hidden md:block"></div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
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
      </h2>

      {/* Paragraph */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
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
