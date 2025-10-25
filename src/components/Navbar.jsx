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
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <HamburgerMenu isOpen={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Dim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Fullscreen Menu */}
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 bg-[#031531]/95 backdrop-blur-lg 
              flex flex-col items-center justify-center space-y-8 
              text-lg z-50"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 hover:text-blue-400 
                    text-2xl font-medium transition duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}