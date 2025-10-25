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
        className={`relative w-24 h-24 transition-opacity duration-1000 ${
          showContent ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transformStyle: "preserve-3d",
          animation: "spinCube 6s linear infinite",
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 rounded-2xl backdrop-blur-[10px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,191,255,0.25), rgba(0,102,255,0.15))",
              border: "1px solid rgba(0,191,255,0.2)",
              boxShadow:
                "inset 0 0 25px rgba(0,191,255,0.3), 0 0 30px rgba(0,191,255,0.3)",
              transform: [
                "translateZ(3rem)", // front
                "rotateY(180deg) translateZ(3rem)", // back
                "rotateY(90deg) translateZ(3rem)", // right
                "rotateY(-90deg) translateZ(3rem)", // left
                "rotateX(90deg) translateZ(3rem)", // top
                "rotateX(-90deg) translateZ(3rem)", // bottom
              ][i],
            }}
          >
            {/* Inner shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00bfff22] to-transparent blur-sm animate-pulse"></div>
          </div>
        ))}
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
      `}</style>
    </div>
  );
};

export default LogoIntro;