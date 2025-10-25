import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCode,
  FaPython,
} from "react-icons/fa";
import { SiVite } from "react-icons/si";

export default function Skills() {
  const Skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "NodeJs", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "PostgreSQL", icon: <FaDatabase className="text-blue-500" /> },
    { name: "TailwindCSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Vite", icon: <SiVite className="text-blue-500" /> },
    { name: "REST APIs", icon: <FaCode className="text-yellow-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
  ];

  return (
    <section
      className="relative min-h-[70vh] px-4 py-16 overflow-hidden bg-white dark:bg-black transition-colors"
    >
      {/* Floating 3D cubes */}
      <div className="hidden md:flex absolute inset-0 z-0 justify-center items-center pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0, rotateY: 0 }}
            animate={{ y: [50, -30, 50], rotateY: 360, opacity: [0, 0.3, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 8 + i,
              delay: i * 0.5,
            }}
            className="w-20 h-20 bg-cyan-400/20 border border-cyan-500 rounded-md absolute"
            style={{
              top: `${i * 15 + 10}%`,
              left: `${i * 15 + 10}%`,
              transformStyle: "preserve-3d",
            }}
          />
        ))}
      </div>

      {/* Section heading */}
      <h2 className="relative text-3xl md:text-6xl font-bold font-orbitron text-center mb-12 text-gray-700 dark:text-gray-300 z-10">
        Skills
      </h2>

      {/* Skills grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {Skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white/80 dark:bg-gray-900/40 text-gray-700 dark:text-gray-300 p-6 rounded-xl shadow hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-4"
          >
            <div className="text-5xl">{skill.icon}</div>
            <span className="text-lg font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}