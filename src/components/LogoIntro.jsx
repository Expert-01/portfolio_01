import React, { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }) => {
  const [explode, setExplode] = useState(false);
  const [done, setDone] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const spinTimer = setTimeout(() => {
      setExplode(true);

      // Generate subtle particles
      const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 250,
        y: (Math.random() - 0.5) * 250,
        delay: Math.random() * 0.3,
      }));
      setParticles(newParticles);

      // End intro after explosion
      setTimeout(() => {
        setDone(true);
        if (onComplete) onComplete();
      }, 1800); // slightly shorter for smooth feel
    }, 3000);

    return () => clearTimeout(spinTimer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-[1000ms] ${
        done ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#031531",
        perspective: "1200px",
        overflow: "hidden",
        pointerEvents: done ? "none" : "auto", // release scroll after intro
      }}
    >
      {/* ==== Spinning Cube ==== */}
      {!done && (
        <div
          className="relative w-16 h-16"
          style={{
            transformStyle: "preserve-3d",
            animation: explode
              ? "darkExplode 1.8s ease-in-out forwards"
              : "spinCube 3s linear infinite",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(3,21,49,0.4), rgba(0,102,255,0.15))",
                border: "1px solid rgba(0,191,255,0.15)",
                boxShadow:
                  "inset 0 0 20px rgba(0,191,255,0.25), 0 0 25px rgba(0,191,255,0.25)",
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

      {/* ==== Particle Sparks ==== */}
      {explode &&
        particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-[3px] h-[3px] rounded-full bg-[#00bfff] opacity-70"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%)`,
              animation: `particleMove 1.5s ${p.delay}s ease-out forwards`,
              "--x": `${p.x}px`,
              "--y": `${p.y}px`,
            }}
          />
        ))}

      <style>{`
        @keyframes spinCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        @keyframes darkExplode {
          0% {
            transform: scale3d(1,1,1) rotateX(0deg) rotateY(0deg);
            box-shadow: 0 0 0 rgba(3,21,49,0);
            filter: brightness(1);
          }
          40% {
            transform: scale3d(2.5,2.5,2.5) rotateX(45deg) rotateY(45deg);
            box-shadow: 0 0 120px 40px rgba(3,21,49,0.6);
            filter: brightness(1.1);
          }
          80% {
            transform: scale3d(5.5,5.5,5.5) rotateX(80deg) rotateY(70deg);
            box-shadow: 0 0 200px 100px rgba(3,21,49,0.9);
            filter: brightness(1.15);
          }
          100% {
            transform: scale3d(12,12,12) rotateX(100deg) rotateY(90deg);
            opacity: 0;
            box-shadow: 0 0 300px 120px rgba(3,21,49,1);
            filter: brightness(1);
          }
        }

        @keyframes particleMove {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
          }
          100% {
            transform: translate(calc(-50% + var(--x,0px)), calc(-50% + var(--y,0px))) scale(0.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoIntro;