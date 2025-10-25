import React, { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Let the cube spin for 3s, then start fading out
    const timer = setTimeout(() => {
      setFadeOut(true);

      // Finish completely after 1.5s
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-[1500ms] ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#031531" }}
    >
      {/* ==== 3D Cube ==== */}
      <div
        className="relative w-16 h-16 transition-transform duration-1000"
        style={{
          transformStyle: "preserve-3d",
          animation: "spinCube 4s linear infinite",
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
