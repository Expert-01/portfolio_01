import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoIntro({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0=draw G, 1=reverse line, 2=rotate, 3=curtain reveal
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timers = [];

    // Phase timing sequence
    timers.push(setTimeout(() => setPhase(1), 1500)); // reverse stroke after G draw
    timers.push(setTimeout(() => setPhase(2), 2000)); // rotate line
    timers.push(setTimeout(() => setPhase(3), 2500)); // curtain reveal
    timers.push(
      setTimeout(() => {
        setShow(false);
        if (onComplete) onComplete();
      }, 3200)
    );

    return () => timers.forEach(clearTimeout);
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
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
        >
          {/* Glassmorph backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[20px]" />

          {/* Glowing dot stroke forming G */}
          {phase < 1 && (
            <motion.svg
              width="160"
              height="160"
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
          )}

          {/* Glowing vertical → horizontal line transition */}
          {phase >= 1 && phase < 3 && (
            <motion.div
              className="absolute bg-[#00aaff]/90 rounded-full shadow-[0_0_30px_#00aaff]"
              initial={{
                width: "4px",
                height: "100vh",
                rotate: 0,
              }}
              animate={{
                rotate: phase === 2 ? 90 : 0,
                width: phase === 2 ? "100vw" : "4px",
                height: phase === 2 ? "4px" : "100vh",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}

          {/* Curtain reveal — slide the black bg up */}
          {phase === 3 && (
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          )}

          {/* Glow pulse ring for atmosphere */}
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