import { motion } from "framer-motion";

export default function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
      className="relative w-8 h-6 flex flex-col justify-between items-center group focus:outline-none"
    >
      {/* Top bar */}
      <motion.span
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0,
          width: isOpen ? "100%" : "100%",
        }}
        transition={{ duration: 0.3 }}
        className="block h-[3px] w-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded"
      ></motion.span>

      {/* Middle bar */}
      <motion.span
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0.5 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="block h-[3px] w-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded"
      ></motion.span>

      {/* Bottom bar */}
      <motion.span
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
          width: isOpen ? "100%" : "70%",
        }}
        transition={{ duration: 0.3 }}
        className="block h-[3px] bg-gradient-to-r from-blue-400 to-cyan-300 rounded"
      ></motion.span>
    </button>
  );
}