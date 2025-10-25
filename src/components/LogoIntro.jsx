import React, { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }) => {
  const [startCurtainReveal, setStartCurtainReveal] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Let the cube spin for 3 seconds, then start curtain reveal
    const timer = setTimeout(() => {
      setStartCurtainReveal(true);

      // When curtain finishes moving up, mark intro as done
      setTimeout(() => {
        setDone(true);
        if (onComplete) onComplete();
      }, 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden ${
        done ? "pointer-events-none" : ""
      }`}
    >
      {/* ==== CURTAIN BACKDROP ==== */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-[#010a18] to-[#031531] transform transition-transform duration-[2000ms] ${
          startCurtainReveal ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{
          transformOrigin: "top center",
        }}
      ></div>

      {/* ==== CUBE (under curtain) ==== */}
      {!done && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div
            className="relative w-16 h-16"
            style={{
              transformStyle: "preserve-3d",
              animation: "spinCube 6s linear infinite",
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 rounded-xl backdrop-blur-[10px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,191,255,0.25), rgba(0,102,255,0.15))",
                  border: "1px solid rgba(0,191,255,0.25)",
                  boxShadow:
                    "inset 0 0 15px rgba(0,191,255,0.3), 0 0 25px rgba(0,191,255,0.4)",
                  transform: [
                    "translateZ(2rem)",
                    "rotateY(180deg) translateZ(2rem)",
                    "rotateY(90deg) translateZ(2rem)",
                    "rotateY(-90deg) translateZ(2rem)",
                    "rotateX(90deg) translateZ(2rem)",
                    "rotateX(-90deg) translateZ(2rem)",
                  ][i],
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00bfff22] to-transparent blur-[1px] animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes spinCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LogoIntro;