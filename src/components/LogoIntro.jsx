import React, { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000); // start fading at 3s
    const doneTimer = setTimeout(() => onComplete && onComplete(), 4000); // done at 4s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: "#031531" }}
    >
      {/* ==== 3D Spinning Cube ==== */}
      {!fadeOut && (
        <div
          className="relative w-16 h-16"
          style={{
            transformStyle: "preserve-3d",
            animation: "spinCube 3s linear infinite",
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
      `}</style>
    </div>
  );
};

export default LogoIntro;