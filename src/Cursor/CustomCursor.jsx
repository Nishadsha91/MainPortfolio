import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(20);
  const [hoveringName, setHoveringName] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    // Target the name elements
    const nameElements = document.querySelectorAll(".hero-name");
    const handleMouseEnter = (e) => {
      setHoveringName(true);
      setHoverText(e.currentTarget.innerText); // text to show inside circle
    };
    const handleMouseLeave = () => {
      setHoveringName(false);
      setHoverText("");
    };

    nameElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      nameElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
  style={{
    position: "fixed",
    top: position.y,
    left: position.x,
    width: hoveringName ? "120px" : "30px",
    height: hoveringName ? "120px" : "30px",
    backgroundColor: "white",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition: "width 0.2s ease, height 0.2s ease",
    zIndex: 9999,
    mixBlendMode: hoveringName ? "difference" : "normal",
    boxShadow: hoveringName
      ? "0 0 20px rgba(72, 140, 251, 0.7), 0 0 25px rgba(255, 157, 14, 0.5)"
      : "0 0 5px rgba(255,255,255,0.3)",
    
    // Center text
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: hoveringName ? "24px" : "0px", // hide when not hovering
    fontWeight: "bold",
    color: "#000",
    overflow: "hidden",
  }}
>
</div>

  );
};

export default CustomCursor;
