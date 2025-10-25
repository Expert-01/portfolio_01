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

      {/* 3D Glass Cube */}
      <div
        className={`relative w-32 h-32 transition-opacity duration-1000 ${
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
            className="absolute w-32 h-32 bg-gradient-to-br from-[#00bfff88] to-[#0066ff55] border border-[#00bfff44] rounded-xl backdrop-blur-[4px] shadow-[inset_0_0_15px_#00bfff55]"
            style={{
              transform: [
                "translateZ(4rem)", // front
                "rotateY(180deg) translateZ(4rem)", // back
                "rotateY(90deg) translateZ(4rem)", // right
                "rotateY(-90deg) translateZ(4rem)", // left
                "rotateX(90deg) translateZ(4rem)", // top
                "rotateX(-90deg) translateZ(4rem)", // bottom
              ][i],
            }}
          />
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