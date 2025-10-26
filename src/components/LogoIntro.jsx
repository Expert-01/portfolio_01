import React, { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }) => {
  const [explode, setExplode] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Cube spins for 3s, then starts a dark explosion that fades smoothly
    const spinTimer = setTimeout(() => {
      setExplode(true);

      // Explosion lasts 2.2s
      setTimeout(() => {
        setDone(true);
        if (onComplete) onComplete();
      }, 2200);
    }, 3000);

    return () => clearTimeout(spinTimer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-[1200ms] ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#031531" }}
    >
      {/* ==== 3D Cube ==== */}
      {!done && (
        <div
          className="relative w-16 h-16"
          style={{
            transformStyle: "preserve-3d",
            animation: explode
              ? "darkExplode 2.2s ease-in-out forwards"
              : "spinCube 3s linear infinite",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(3,21,49,0.5), rgba(0,102,255,0.1))",
                border: "1px solid rgba(0,191,255,0.15)",
                boxShadow:
                  "inset 0 0 15px rgba(0,191,255,0.2), 0 0 25px rgba(0,191,255,0.25)",
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

        /* Dark smooth explosion in the same color theme */
        @keyframes darkExplode {
          0% {
            transform: scale3d(1,1,1) rotateX(0deg) rotateY(0deg);
            box-shadow: 0 0 0 rgba(3,21,49,0);
            background-color: transparent;
          }
          40% {
            transform: scale3d(3,3,3) rotateX(45deg) rotateY(45deg);
            box-shadow: 0 0 100px 40px rgba(3,21,49,0.6);
            background-color: rgba(3,21,49,0.3);
          }
          70% {
            transform: scale3d(6,6,6) rotateX(70deg) rotateY(60deg);
            box-shadow: 0 0 150px 80px rgba(3,21,49,0.8);
            background-color: rgba(3,21,49,0.5);
          }
          100% {
            transform: scale3d(15,15,15) rotateX(90deg) rotateY(80deg);
            opacity: 0;
            box-shadow: 0 0 300px 120px rgba(3,21,49,1);
            background-color: rgba(3,21,49,1);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoIntro;