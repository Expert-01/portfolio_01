import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoIntro({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 3000); // matches your duration_seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100vh",
            transition: { duration: 0.7, ease: "easeIn" },
          }}
        >
          {/* Glassmorph backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[20px]" />

          {/* Glowing Dot Logo Animation */}
          <motion.svg
            width="150"
            height="150"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative"
          >
            <motion.path
              d="M60 15C35 15 20 35 20 60C20 85 35 105 60 105C80 105 95 90 95 75H70"
              stroke="#00aaff"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOutCubic" }}
              style={{
                filter: "drop-shadow(0 0 8px #00aaff)",
              }}
            />
          </motion.svg>

          {/* Glow ring pulse */}
          <motion.div
            className="absolute w-40 h-40 rounded-full bg-[#00aaff]/20 blur-3xl"
            initial={{ scale: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: [0.4, 0.6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}