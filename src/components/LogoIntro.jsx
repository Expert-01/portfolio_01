import React, { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }) => {
  const [explode, setExplode] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Cube spins for 3s before starting to explode
    const spinTimer = setTimeout(() => {
      setExplode(true);

      // Explosion lasts 2.5s for a smoother feel
      setTimeout(() => {
        setDone(true);
        if (onComplete) onComplete();
      }, 2500);
    }, 3000);

    return () => clearTimeout(spinTimer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1000 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#031531" }}
    >
      {/* ==== 3D Cube ==== */}
      {!done && (
        <div
          className={`relative w-16 h-16 ${
            explode ? "animate-explodeCube" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            animation: explode ? "explodeCube 2.5s ease-in-out forwards" : "spinCube 3s ease-in-out infinite",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 rounded-xl"
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
      )}

      <style>{`
        @keyframes spinCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        /* Smooth, multi-phase 3D scale explosion */
        @keyframes explodeCube {
          0% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg);
          }
          30% {
            transform: scale3d(2, 2, 2) rotateX(30deg) rotateY(20deg);
          }
          60% {
            transform: scale3d(5, 5, 5) rotateX(60deg) rotateY(45deg);
          }
          85% {
            transform: scale3d(10, 10, 10) rotateX(80deg) rotateY(60deg);
          }
          100% {
            transform: scale3d(20, 20, 20) rotateX(90deg) rotateY(70deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoIntro;