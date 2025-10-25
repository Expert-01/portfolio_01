import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav
      className="fixed top-0 w-full z-50 
      bg-[#031531]/60 dark:bg-[#031531]/70 
      backdrop-blur-md shadow-sm 
      transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-semibold text-blue-400">
          {"</Gideon.dev>"}
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-[60]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <HamburgerMenu isOpen={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full 
            bg-[#031531]/95 backdrop-blur-md 
            shadow-lg border-t border-gray-800
            flex flex-col items-center py-6 space-y-5
            z-50"
          >
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 
                  text-lg font-medium transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}