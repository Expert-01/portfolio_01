import React, { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }) => {
  const [revealCurtain, setRevealCurtain] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    // Cube spins for 3s, then curtain reveals
    const curtainTimer = setTimeout(() => {
      setRevealCurtain(true);
      // After curtain finishes moving up, call onComplete
      setTimeout(() => {
        setIntroDone(true);
        if (onComplete) onComplete();
      }, 1500); // matches curtain animation
    }, 3000);

    return () => clearTimeout(curtainTimer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-[9999]">
      {/* CURTAIN (main reveal layer) */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-[#010a18] to-[#031531] transition-transform duration-[1500ms] ease-in-out ${
          revealCurtain ? "-translate-y-full" : "translate-y-0"
        }`}
      ></div>

      {/* 3D LIQUID GLASS CUBE */}
      {!introDone && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div
            className="relative w-16 h-16"
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
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00bfff22] to-transparent blur-[1px] animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* KEYFRAMES */}
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