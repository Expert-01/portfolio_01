import React, { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }) => {
  const [explode, setExplode] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Step 1: Spin for 3 seconds
    const spinTimer = setTimeout(() => {
      setExplode(true);

      // Step 2: Explosion takes ~1.2s, then intro ends
      setTimeout(() => {
        setDone(true);
        if (onComplete) onComplete();
      }, 1200);
    }, 3000);

    return () => clearTimeout(spinTimer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#010a18" }}
    >
      {/* ==== 3D Cube ==== */}
      {!done && (
        <div
          className={`relative w-16 h-16 transition-transform duration-[1200ms] ease-in-out`}
          style={{
            transformStyle: "preserve-3d",
            animation: !explode ? "spinCube 3s linear forwards" : "none",
            transform: explode
              ? "rotateY(90deg) scale(20)"
              : "rotateY(0deg) scale(1)",
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
      )}

      <style>{`
        @keyframes spinCube {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LogoIntro;