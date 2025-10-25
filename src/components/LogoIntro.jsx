import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoIntro({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase === 6 && onComplete) onComplete();
  }, [phase, onComplete]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1500), // draw G
      setTimeout(() => setPhase(2), 3000), // G restrokes
      setTimeout(() => setPhase(3), 4000), // show vertical beam
      setTimeout(() => setPhase(4), 6000), // rotate beam
      setTimeout(() => setPhase(5), 8500), // move beam down
      setTimeout(() => setPhase(6), 10500), // push curtain up (reveal)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {phase < 7 && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
          initial={{ y: 0 }}
          animate={phase === 6 ? { y: "-100vh" } : {}}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          {/* Glassmorph overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[20px]" />

          {/* Glowing G path animation */}
          {phase <= 2 && (
            <motion.svg
              width="180"
              height="180"
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
                animate={{ pathLength: phase === 1 ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{
                  filter: "drop-shadow(0 0 8px #00aaff)",
                }}
              />
            </motion.svg>
          )}

          {/* Vertical beam + rotation + downward motion */}
          {phase >= 3 && phase <= 5 && (
            <motion.div
              className="absolute w-[2px] h-full bg-[#00aaff] shadow-[0_0_25px_#00aaff]"
              initial={{ rotate: 0, y: 0 }}
              animate={
                phase === 4
                  ? {
                      rotate: 90,
                      transition: { duration: 2, ease: "easeInOut" },
                    }
                  : phase === 5
                  ? {
                      rotate: 90,
                      y: "50vh", // move beam down to bottom
                      transition: { duration: 2, ease: "easeInOut" },
                    }
                  : {}
              }
            />
          )}

          {/* Glow pulse */}
          {phase >= 3 && phase <= 5 && (
            <motion.div
              className="absolute w-40 h-40 rounded-full bg-[#00aaff]/25 blur-3xl"
              initial={{ scale: 0 }}
              animate={{ scale: [0.8, 1.2, 1], opacity: [0.5, 0.6, 0.3] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}