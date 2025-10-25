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

export default function Skills() {
  const Skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    { name: "NodeJs", icon: <FaNodeJs /> },
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "TailwindCSS", icon: <FaCss3Alt /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "REST APIs", icon: <FaCode /> },
    { name: "Python", icon: <FaPython /> },
  ];

  return (
    <section className="relative min-h-[70vh] px-4 py-16 overflow-hidden bg-white dark:bg-black transition-colors">
      {/* Floating 3D cubes */}
      <div className="hidden md:flex absolute inset-0 z-0 justify-center items-center pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, x: 0, rotateY: 0, rotateX: 0, opacity: 0 }}
            animate={{
              y: [0, -30, 20, 0],
              x: [0, 20, -20, 0],
              rotateY: [0, 180, 360],
              rotateX: [0, 180, 360],
              opacity: [0, 0.2, 0.3, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 12 + i * 2,
              delay: i * 0.3,
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
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-500/20 p-5 rounded-xl shadow hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3"
          >
            {/* Mercury gradient icon */}
            <div className="text-3xl w-12 h-12 relative">
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id={`mercury-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#cbd5e1" />
                    <stop offset="50%" stopColor="#f1f5f9" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </linearGradient>
                  <mask id={`mask-${index}`}>
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="3rem" fontWeight="bold">
                      {skill.icon.type.render.name}
                    </text>
                  </mask>
                </defs>
                <rect width="100%" height="100%" fill={`url(#mercury-${index})`} mask={`url(#mask-${index})`} className="animate-mercury" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                {skill.icon}
              </div>
            </div>

            <span className="text-base font-semibold text-gray-600 dark:text-gray-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes mercury {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-mercury {
          animation: mercury 3s linear infinite;
        }
      `}</style>
    </section>
  );
}