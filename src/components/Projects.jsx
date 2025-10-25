import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Crypto Investment Site",
    description: "A secure broker platform built with Node.js, PostgreSQL, and Express.",
    link: "#",
    image: "", // Placeholder for project screenshot
  },
  {
    title: "Campus Buddy",
    description: "An interactive student helper with reminders, campus map, and study tracker.",
    link: "#",
    image: "", // Placeholder for project screenshot
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gray-900 dark:bg-[#00000b] text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl md:text-6xl font-bold font-orbitron text-center mb-16">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid gap-10 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
            className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-500/20 p-6 rounded-xl shadow hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-6"
          >
            {/* Placeholder for project screenshot */}
            <div className="w-full h-48 bg-gray-700/30 dark:bg-gray-600/30 rounded-md flex items-center justify-center text-gray-400 font-mono">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-md" />
              ) : (
                "Screenshot coming soon"
              )}
            </div>

            {/* Project title */}
            <h3 className="text-2xl font-semibold">{project.title}</h3>

            {/* Project description */}
            <p className="text-center text-gray-300">{project.description}</p>

            {/* View Project button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 dark:bg-gray-700/30 backdrop-blur-md border border-white/20 dark:border-gray-500/20 rounded-lg text-gray-900 dark:text-white font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}