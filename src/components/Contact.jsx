import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xblkrved", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-20 text-center text-gray-900 dark:text-white overflow-hidden dark:bg-gradient-to-b from-[#000000] to-[#0f172b]">
      {/* Section heading */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold font-orbitron mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-10 text-gray-400 animate-bounce"
      >
        I’d love to hear from you! Whether you have a question, want to work together, or just want to say hi, feel free to drop me a message.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto grid gap-6"
      >
        {/* Inputs */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-white/30 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-white/30 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        />
        <textarea
          name="message"
          rows="8"
          placeholder="Your Message"
          required
          className="p-4 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-white/30 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        />

        {/* Liquid glass submit button */}
        <button
          type="submit"
          className="relative py-3 rounded-xl text-white font-semibold bg-white/10 dark:bg-white/20 backdrop-blur-md border border-white/30 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/30 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">Send Message</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-30 blur-xl animate-pulse"></div>
        </button>

        {/* Form status messages */}
        {formStatus === "sending" && (
          <p className="text-cyan-400 mt-2">Sending...</p>
        )}
        {formStatus === "success" && (
          <p className="text-green-400 mt-2">Message sent successfully!</p>
        )}
        {formStatus === "error" && (
          <p className="text-red-400 mt-2">
            There was an error sending your message. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}