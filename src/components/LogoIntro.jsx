import React, { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }) => {
  const [revealCurtain, setRevealCurtain] = useState(false);

  useEffect(() => {
    // Let the cube spin for 3 seconds before the curtain starts going up
    const timer1 = setTimeout(() => {
      setRevealCurtain(true);
    }, 3000);

    // Wait for curtain animation to finish before showing the site
    const timer2 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500); // Curtain reveal lasts ~1.5s

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-[#010a18]">
      {/* --- CURTAIN OVERLAY --- */}
      <div
        className={`absolute inset-0 z-20 bg-gradient-to-b from-[#010a18] to-[#031531] transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          revealCurtain ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Optional shimmer line for a premium look */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#00bfff80] to-transparent transition-opacity duration-700 ${
            revealCurtain ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* --- 3D LIQUID GLASS CUBE --- */}
      <div
        className={`relative z-10 w-16 h-16 transition-opacity duration-700 ${
          revealCurtain ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transformStyle: "preserve-3d",
          animation: "spinCube 6s linear infinite",
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 rounded-xl backdrop-blur-[12px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,191,255,0.25), rgba(0,102,255,0.12))",
              border: "1px solid rgba(0,191,255,0.25)",
              boxShadow:
                "inset 0 0 15px rgba(0,191,255,0.3), 0 0 20px rgba(0,191,255,0.3)",
              transform: [
                "translateZ(2rem)", // front
                "rotateY(180deg) translateZ(2rem)", // back
                "rotateY(90deg) translateZ(2rem)", // right
                "rotateY(-90deg) translateZ(2rem)", // left
                "rotateX(90deg) translateZ(2rem)", // top
                "rotateX(-90deg) translateZ(2rem)", // bottom
              ][i],
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00bfff22] to-transparent blur-[1px] animate-pulse" />
          </div>
        ))}
      </div>

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010a18] to-[#031531]" />

      {/* --- KEYFRAMES --- */}
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