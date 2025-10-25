import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoIntro({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0=draw G, 1=line form, 2=rotate, 3=reveal
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timers = [];

    // Sequential timing
    timers.push(setTimeout(() => setPhase(1), 1600)); // G → vertical line
    timers.push(setTimeout(() => setPhase(2), 2200)); // rotate across
    timers.push(setTimeout(() => setPhase(3), 3000)); // curtain reveal
    timers.push(
      setTimeout(() => {
        setShow(false);
        if (onComplete) onComplete();
      }, 3700)
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
          {/* Frosted glass backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[20px]" />

          {/* PHASE 0: Glowing 'G' drawing */}
          {phase === 0 && (
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
                initial={{ pathLength: 0, opacity: 1 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOutCubic" }}
                style={{
                  filter: "drop-shadow(0 0 10px #00aaff)",
                }}
              />
            </motion.svg>
          )}

          {/* PHASE 1–2: Transform into glowing beam */}
          {phase >= 1 && phase < 3 && (
            <motion.div
              className="absolute bg-gradient-to-b from-[#00aaff] to-[#0077ff] rounded-full shadow-[0_0_40px_#00aaff]"
              initial={{
                width: "4px",
                height: "0vh",
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                height: phase === 1 ? "100vh" : "4px",
                width: phase === 2 ? "100vw" : "4px",
                rotate: phase === 2 ? 90 : 0,
                opacity: phase === 2 ? 0.9 : 1,
              }}
              transition={{
                duration: phase === 1 ? 0.6 : 1.2,
                ease: "easeInOut",
              }}
            />
          )}

          {/* PHASE 3: Curtain reveal — pulls up */}
          {phase === 3 && (
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}

          {/* Soft fading glow behind everything */}
          <motion.div
            className="absolute w-52 h-52 rounded-full bg-[#00aaff]/25 blur-3xl"
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{
              scale: [0.8, 1.3, 1],
              opacity: [0.3, 0.6, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}