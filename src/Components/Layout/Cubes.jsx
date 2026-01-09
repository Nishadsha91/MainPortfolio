import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

const Cubes = ({
  gridSize = 4,
  cubeSize = 136,
  skills = [],
  maxAngle = 22,
  radius = 2.2,
  faceColor = "rgba(12,12,18,0.9)",
  borderStyle = "1px solid rgba(255,255,255,0.08)",
}) => {
  const sceneRef = useRef(null);

  const gap = 28;
  const depth = cubeSize * 0.28;

  const totalCubes = gridSize * gridSize;
  const mappedSkills = Array.from(
    { length: totalCubes },
    (_, i) => skills[i % skills.length]
  );

  const tiltAt = useCallback(
    (rowCenter, colCenter) => {
      sceneRef.current?.querySelectorAll(".cube").forEach(cube => {
        const r = +cube.dataset.row;
        const c = +cube.dataset.col;
        const dist = Math.hypot(r - rowCenter, c - colCenter);

        const pct = Math.max(0, 1 - dist / radius);
        const angle = pct * maxAngle;

        gsap.to(cube, {
          rotateX: -angle,
          rotateY: angle,
          duration: 0.35,
          ease: "power3.out",
        });
      });
    },
    [radius, maxAngle]
  );

  const resetAll = () => {
    sceneRef.current?.querySelectorAll(".cube").forEach(cube => {
      gsap.to(cube, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    });
  };

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    const onMove = e => {
      const rect = el.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      tiltAt(
        (e.clientY - rect.top) / cellH,
        (e.clientX - rect.left) / cellW
      );
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", resetAll);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", resetAll);
    };
  }, [tiltAt, gridSize]);

  return (
    <div className="w-full flex justify-center">
      {/* FIXED WIDTH WRAPPER (important) */}
      <div
  style={{
    width: (gridSize * cubeSize + (gridSize - 1) * gap) * 1.15,
  }}
>
        <div
          ref={sceneRef}
          className="grid mx-auto"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, ${cubeSize}px)`,
            gridTemplateRows: `repeat(${gridSize}, ${cubeSize}px)`,
            gap: `${gap}px`,
            perspective: "1400px",
          }}
        >
          {mappedSkills.map((skill, i) => {
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;

            return (
              <div
                key={i}
                className="cube relative [transform-style:preserve-3d]"
                data-row={row}
                data-col={col}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center
                             rounded-xl backdrop-blur-md
                             transition-all duration-300
                             hover:ring-1 hover:ring-indigo-400/40"
                  style={{
                    background: faceColor,
                    border: borderStyle,
                    transform: `translateZ(${depth}px)`,
                  }}
                >
                  <div className="text-3xl">{skill.icon}</div>
                  <span className="mt-2 text-xs text-gray-400 opacity-70">
                    {skill.name}
                  </span>
                </div>

                {/* DEPTH FACES (no borders = cleaner) */}
                {[
                  `rotateY(180deg) translateZ(${depth}px)`,
                  `rotateY(-90deg) translateZ(${depth}px)`,
                  `rotateY(90deg) translateZ(${depth}px)`,
                  `rotateX(90deg) translateZ(${depth}px)`,
                  `rotateX(-90deg) translateZ(${depth}px)`
                ].map((t, idx) => (
                  <div
                    key={idx}
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "rgba(8,8,12,0.85)",
                      transform: t,
                    }}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cubes;
