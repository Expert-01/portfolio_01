import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="relative py-32 px-6 md:px-12 text-gray-300 overflow-hidden flex flex-col md:flex-row items-start justify-between"
      style={{
        background: "linear-gradient(180deg, #000000, #0a0a10, #031531)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 25s ease infinite"
      }}
    >
      {/* Left side: Title + Paragraph */}
      <div className="flex-1">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-8xl font-azonix font-bold mb-12 text-left"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-lg md:text-xl leading-relaxed text-left font-sans"
        >
          I'm a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> passionate about building efficient, scalable, and beautiful digital solutions. With a strong foundation in <span className="text-cyan-400 font-semibold">JavaScript, React, Node.js, PostgreSQL</span>, I enjoy solving real-world problems and constantly learning new tech.
        </motion.p>
      </div>

      {/* Right side: 3D futuristic cubes (desktop only) */}
      <div className="flex-1 relative hidden md:flex justify-center items-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0, rotateY: 0 }}
            animate={{ y: [50, 0, 50], rotateY: 360, opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 6 + i,
              delay: i * 0.5,
            }}
            className="w-16 h-16 bg-cyan-400/20 border border-cyan-500 rounded-md absolute"
            style={{
              top: `${i * 20}%`,
              left: `${i * 15}%`,
              transformStyle: "preserve-3d",
            }}
          />
        ))}
      </div>

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