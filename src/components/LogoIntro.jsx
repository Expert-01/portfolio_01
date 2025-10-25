import React, { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      // Trigger onComplete slightly after reveal
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
    }, 3000); // Cube spins for 3s
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Circular Reveal */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-[1500ms] ease-in-out ${
          showContent ? "scale-[40] opacity-0" : "scale-0 opacity-100"
        }`}
      >
        <div className="w-10 h-10 bg-[#0af] rounded-full shadow-[0_0_60px_#00bfff]" />
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010a18] to-[#031531]" />

      {/* 3D Refractive Glass Cube */}
      <div
        className={`relative w-20 h-20 transition-opacity duration-1000 ${
          showContent ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transformStyle: "preserve-3d",
          animation: "spinCube 6s linear infinite",
          filter: "drop-shadow(0 0 30px #00bfff55)",
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 bg-[rgba(0,191,255,0.15)] border border-[#00bfff66] rounded-xl backdrop-blur-[12px] shadow-[inset_0_0_25px_#00bfff66,0_0_35px_#00bfff33]"
            style={{
              transform: [
                "translateZ(2.5rem)", // front
                "rotateY(180deg) translateZ(2.5rem)", // back
                "rotateY(90deg) translateZ(2.5rem)", // right
                "rotateY(-90deg) translateZ(2.5rem)", // left
                "rotateX(90deg) translateZ(2.5rem)", // top
                "rotateX(-90deg) translateZ(2.5rem)", // bottom
              ][i],
              background:
                "linear-gradient(145deg, rgba(0,191,255,0.2), rgba(0,102,255,0.05))",
              boxShadow:
                "inset 0 0 25px rgba(0,191,255,0.6), 0 0 40px rgba(0,191,255,0.3)",
            }}
          />
        ))}

        {/* Subtle shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#ffffff22] to-transparent animate-shimmer rounded-xl" />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spinCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(15deg); opacity: 0.2; }
          50% { opacity: 0.4; }
          100% { transform: translateX(100%) rotate(15deg); opacity: 0.2; }
        }

        .animate-shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoIntro;