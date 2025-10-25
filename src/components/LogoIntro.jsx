import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoIntro({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase === 7 && onComplete) onComplete();
  }, [phase, onComplete]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1500),  // Draw G
      setTimeout(() => setPhase(2), 3000),  // G undraws to dot
      setTimeout(() => setPhase(3), 4000),  // Dot expands to beam
      setTimeout(() => setPhase(4), 6000),  // Rotate beam
      setTimeout(() => setPhase(5), 8500),  // Beam drops down
      setTimeout(() => setPhase(6), 10500), // Push curtain up
      setTimeout(() => setPhase(7), 13000), // End animation
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {phase < 8 && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Glassmorph backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[20px]" />

          {/* PHASE 1–2: Glowing 'G' draws and undraws to dot */}
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
                  opacity: phase === 2 ? 0.7 : 1,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 10px #00aaff)" }}
              />
              {/* Central dot that appears as G undraws */}
              {phase === 2 && (
                <motion.circle
                  cx="60"
                  cy="60"
                  r="3"
                  fill="#00aaff"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [1, 1.5, 1.2],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{ filter: "drop-shadow(0 0 15px #00aaff)" }}
                />
              )}
            </motion.svg>
          )}

          {/* PHASE 3–5: Beam expands, rotates, and drops */}
          {phase >= 3 && phase <= 5 && (
            <motion.div
              className="absolute bg-[#00aaff] rounded-full"
              style={{
                boxShadow:
                  phase === 5
                    ? "0 0 60px 25px #00aaff"
                    : "0 0 25px 10px #00aaff",
              }}
              initial={{ width: 4, height: 0, rotate: 0, y: 0 }}
              animate={
                phase === 3
                  ? {
                      height: "100vh", // expand upward & downward from center
                      transition: { duration: 1.8, ease: "easeInOut" },
                    }
                  : phase === 4
                  ? {
                      rotate: 90,
                      transition: { duration: 2.5, ease: "easeInOut" },
                    }
                  : phase === 5
                  ? {
                      rotate: 90,
                      y: "100vh", // beam drops completely off-screen
                      transition: { duration: 2, ease: "easeInOut" },
                    }
                  : {}
              }
            />
          )}

          {/* PHASE 6: Curtain slowly lifts up */}
          {phase === 6 && (
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          )}

          {/* Background glow pulse (for energy effect) */}
          <motion.div
            className="absolute w-52 h-52 rounded-full bg-[#00aaff]/25 blur-3xl"
            initial={{ scale: 0.8, opacity: 0.4 }}
            animate={{
              scale: [0.8, 1.3, 1],
              opacity: [0.3, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}