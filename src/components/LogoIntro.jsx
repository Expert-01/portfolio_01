import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoIntro({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase === 6 && onComplete) onComplete();
  }, [phase, onComplete]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1500), // Draw G
      setTimeout(() => setPhase(2), 3000), // Undraw to dot
      setTimeout(() => setPhase(3), 4000), // Expand to beam
      setTimeout(() => setPhase(4), 6000), // Rotate beam
      setTimeout(() => setPhase(5), 8500), // Slide beam down
      setTimeout(() => setPhase(6), 11000), // Curtain reveal
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {phase < 7 && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
          initial={{ y: 0 }}
          animate={phase === 6 ? { y: "-100%" } : {}}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        >
          {/* Frosted background overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[20px]" />

          {/* === 1 & 2. Glowing G draw + undraw to dot === */}
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
                animate={{
                  pathLength: phase === 1 ? 1 : 0,
                  opacity: 1,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 8px #00aaff)" }}
              />

              {/* Last blue dot appears as “G” undraws */}
              {phase === 2 && (
                <motion.circle
                  cx="70"
                  cy="75"
                  r="4"
                  fill="#00aaff"
                  style={{
                    filter: "drop-shadow(0 0 12px #00aaff)",
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              )}
            </motion.svg>
          )}

          {/* === 3–5. Beam growth, rotation, slide === */}
          {phase >= 3 && phase <= 5 && (
            <motion.div
              className="absolute bg-[#00aaff] shadow-[0_0_25px_#00aaff]"
              initial={{
                width: "4px",
                height: "0vh",
                y: 0,
                rotate: 0,
              }}
              animate={
                phase === 3
                  ? {
                      height: "100vh", // grows from dot to full vertical beam
                      transition: { duration: 1.6, ease: "easeInOut" },
                    }
                  : phase === 4
                  ? {
                      rotate: 90,
                      transition: { duration: 2, ease: "easeInOut" },
                    }
                  : phase === 5
                  ? {
                      rotate: 90,
                      y: "70vh", // slides downward and offscreen
                      transition: { duration: 2, ease: "easeInOut" },
                    }
                  : {}
              }
              style={{
                width: "4px",
                height: "100vh",
                borderRadius: "9999px",
              }}
            />
          )}

          {/* Subtle glow aura behind beam */}
          {phase >= 3 && phase <= 5 && (
            <motion.div
              className="absolute w-40 h-40 rounded-full bg-[#00aaff]/30 blur-3xl"
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={{ scale: [0.9, 1.2, 1], opacity: [0.4, 0.6, 0.3] }}
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