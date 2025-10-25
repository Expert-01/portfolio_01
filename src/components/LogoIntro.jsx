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

      {/* 3D Liquid Glass Cube */}
      <div
        className={`relative w-16 h-16 transition-opacity duration-1000 ${
          showContent ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transformStyle: "preserve-3d",
          animation: "spinCube 6s linear infinite, floatUpDown 4s ease-in-out infinite",
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 rounded-2xl backdrop-blur-[12px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,191,255,0.25), rgba(0,102,255,0.15))",
              border: "1px solid rgba(0,191,255,0.25)",
              boxShadow:
                "inset 0 0 25px rgba(0,191,255,0.4), 0 0 30px rgba(0,191,255,0.25)",
              transform: [
                "translateZ(2.5rem)", // front
                "rotateY(180deg) translateZ(2.5rem)", // back
                "rotateY(90deg) translateZ(2.5rem)", // right
                "rotateY(-90deg) translateZ(2.5rem)", // left
                "rotateX(90deg) translateZ(2.5rem)", // top
                "rotateX(-90deg) translateZ(2.5rem)", // bottom
              ][i],
            }}
          >
            {/* Inner shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00bfff33] to-transparent blur-md animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spinCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default LogoIntro;