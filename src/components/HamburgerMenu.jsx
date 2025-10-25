import { motion } from "framer-motion";

export default function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <motion.button
      onClick={toggleMenu}
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
      className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
      whileTap={{ scale: 0.9 }}
    >
      {/* Glowing pulse ring */}
      {isOpen && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-10 h-10 rounded-full bg-blue-500/30 blur-md"
        />
      )}

      {/* Top bar */}
      <motion.span
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : -5,
          width: isOpen ? "100%" : "100%",
        }}
        transition={{ duration: 0.3 }}
        className="block h-[2.5px] w-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded"
      ></motion.span>

      {/* Middle bar */}
      <motion.span
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="block h-[2.5px] w-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded my-[3px]"
      ></motion.span>

      {/* Bottom bar */}
      <motion.span
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 5,
          width: isOpen ? "100%" : "70%",
        }}
        transition={{ duration: 0.3 }}
        className="block h-[2.5px] bg-gradient-to-r from-blue-400 to-cyan-300 rounded"
      ></motion.span>
    </motion.button>
  );
}