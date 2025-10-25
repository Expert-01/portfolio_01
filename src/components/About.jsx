import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Frontend Development",
    description:
      "Expertise in building responsive and interactive user interfaces with React, Tailwind CSS, and modern frontend tools. I focus on performance, accessibility, and smooth UX."
  },
  {
    name: "Backend Development",
    description:
      "Strong foundation in Node.js, Express, and PostgreSQL. I build scalable APIs, implement authentication, and manage databases efficiently for real-world applications."
  },
  {
    name: "UI/UX & Design",
    description:
      "Passionate about creating visually appealing and user-friendly designs. I use Figma and design principles to craft interfaces that are both aesthetic and functional."
  }
];

export default function About() {
  return (
    <section
      className="relative text-gray-400 flex flex-col md:flex-row overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000, #0a0a10, #031531)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 25s ease infinite"
      }}
    >
      {/* Left side */}
      <div className="flex-1 relative">
        {/* Sticky container for skills */}
        <div className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-12">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl font-azonix font-bold mb-16"
          >
            About Me
          </motion.h2>

          {/* Skills stack */}
          <div className="flex flex-col">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="mb-12"
                style={{ position: "relative", zIndex: skills.length - idx }}
              >
                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-cyan-400 mb-2 sticky top-[5rem]">
                  {skill.name}
                </h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-lg md:text-xl leading-relaxed font-sans"
                >
                  {skill.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side: 3D cubes */}
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
              delay: i * 0.5
            }}
            className="w-16 h-16 bg-cyan-400/20 border border-cyan-500 rounded-md absolute"
            style={{
              top: `${i * 20}%`,
              left: `${i * 15}%`,
              transformStyle: "preserve-3d"
            }}
          />
        ))}
      </div>

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