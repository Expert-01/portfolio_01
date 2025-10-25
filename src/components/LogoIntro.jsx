import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoIntro({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase === 5 && onComplete) onComplete();
  }, [phase, onComplete]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1500), // draw G complete
      setTimeout(() => setPhase(2), 3000), // G restrokes
      setTimeout(() => setPhase(3), 4000), // show vertical beam
      setTimeout(() => setPhase(4), 5500), // rotate to horizontal
      setTimeout(() => setPhase(5), 7000), // slide reveal
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {phase < 6 && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          animate={phase === 5 ? { y: "-100vh", opacity: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Glassmorph overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[20px]" />

          {/* G draw phase */}
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

          {/* Vertical beam + rotation */}
          {phase >= 3 && phase < 5 && (
            <motion.div
              className="absolute w-[2px] h-full bg-[#00aaff] shadow-[0_0_20px_#00aaff]"
              initial={{ rotate: 0 }}
              animate={
                phase === 4
                  ? { rotate: 90, transition: { duration: 1.5, ease: "easeInOut" } }
                  : {}
              }
            />
          )}

          {/* Glow pulse during beam */}
          {phase >= 3 && phase < 5 && (
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-[#00aaff]/30 blur-3xl"
              initial={{ scale: 0 }}
              animate={{ scale: [0.8, 1.2, 1], opacity: [0.4, 0.6, 0] }}
              transition={{
                duration: 1.5,
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