import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xblkrved', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-20 text-center text-gray-900 dark:text-white overflow-hidden">
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
              opacity: [0, 0.2, 0.3, 0]
            }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 12 + i * 2, delay: i * 0.3 }}
            className="w-24 h-24 bg-cyan-400/20 border border-cyan-500 rounded-md absolute"
            style={{ top: `${i * 15 + 10}%`, left: `${i * 15 + 10}%`, transformStyle: "preserve-3d" }}
          />
        ))}
      </div>

      {/* Heading */}
      <motion.h2
        className="relative text-5xl md:text-6xl font-bold font-orbitron mb-6 text-gray-700 dark:text-gray-300 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="mb-10 text-gray-600 dark:text-gray-400 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I’d love to hear from you! Whether you have a question, want to work together, or just want to say hi, feel free to drop me a message.
      </motion.p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="relative z-10 max-w-xl mx-auto grid gap-6">
        <motion.label
          className="flex flex-col text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="mb-1 text-gray-700 dark:text-gray-300 font-mono">Your Name</span>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="p-4 rounded-xl bg-white/20 dark:bg-gray-900/30 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-lg transition-all"
            required
          />
        </motion.label>

        <motion.label
          className="flex flex-col text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="mb-1 text-gray-700 dark:text-gray-300 font-mono">Your Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="p-4 rounded-xl bg-white/20 dark:bg-gray-900/30 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-lg transition-all"
            required
          />
        </motion.label>

        <motion.label
          className="flex flex-col text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="mb-1 text-gray-700 dark:text-gray-300 font-mono">Your Message</span>
          <textarea
            name="message"
            placeholder="Type your message..."
            rows="8"
            className="p-4 rounded-xl bg-white/20 dark:bg-gray-900/30 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-lg transition-all resize-y"
            required
          />
        </motion.label>

        <motion.button
          type="submit"
          disabled={formStatus === 'sending'}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-3 px-6 rounded-xl font-mono text-white bg-white/20 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-500/20 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          {formStatus === 'sending' ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Status messages */}
        <div aria-live="polite" className="h-6 mt-2 text-center">
          {formStatus === 'success' && <motion.p className="text-green-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Message sent successfully!</motion.p>}
          {formStatus === 'error' && <motion.p className="text-red-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>There was an error. Please try again.</motion.p>}
        </div>
      </form>
    </section>
  );
}