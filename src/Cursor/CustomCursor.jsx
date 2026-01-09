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



// import React, { useEffect, useState, useCallback } from "react";

// const CustomCursor = () => {
//   const [isHovering, setIsHovering] = useState(false);
//   const [hoverText, setHoverText] = useState("");

//   // Use ref for direct DOM manipulation (most performant)
//   const cursorRef = React.useRef(null);

//   // Throttled mouse move handler
//   const mouseMoveHandler = useCallback((e) => {
//     if (cursorRef.current) {
//       cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
//     }
//   }, []);

//   useEffect(() => {
//     // Use passive event listener for better performance
//     window.addEventListener("mousemove", mouseMoveHandler, { passive: true });

//     // Event delegation for hover states
//     const handleMouseOver = (e) => {
//       if (e.target.classList.contains('hero-name')) {
//         setIsHovering(true);
//         setHoverText(e.target.innerText || "");
        
//         // Update cursor size immediately
//         if (cursorRef.current) {
//           cursorRef.current.style.width = '120px';
//           cursorRef.current.style.height = '120px';
//           cursorRef.current.style.fontSize = '24px';
//         }
//       }
//     };

//     const handleMouseOut = (e) => {
//       if (e.target.classList.contains('hero-name')) {
//         setIsHovering(false);
//         setHoverText("");
        
//         // Update cursor size immediately
//         if (cursorRef.current) {
//           cursorRef.current.style.width = '30px';
//           cursorRef.current.style.height = '30px';
//           cursorRef.current.style.fontSize = '0px';
//         }
//       }
//     };

//     document.addEventListener('mouseover', handleMouseOver, { passive: true });
//     document.addEventListener('mouseout', handleMouseOut, { passive: true });

//     return () => {
//       window.removeEventListener("mousemove", mouseMoveHandler);
//       document.removeEventListener('mouseover', handleMouseOver);
//       document.removeEventListener('mouseout', handleMouseOut);
//     };
//   }, [mouseMoveHandler]);

//   return (
//     <div
//       ref={cursorRef}
//       className="custom-cursor"
//       style={{
//         position: "fixed",
//         top: -15, // Half of default size (30px)
//         left: -15, // Half of default size (30px)
//         width: "30px",
//         height: "30px",
//         backgroundColor: "white",
//         borderRadius: "50%",
//         pointerEvents: "none",
//         transform: "translate3d(0, 0, 0)",
//         transition: "width 0.2s ease, height 0.2s ease, font-size 0.2s ease",
//         zIndex: 9999,
//         mixBlendMode: "normal",
//         boxShadow: "0 0 5px rgba(255,255,255,0.3)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontSize: "0px",
//         fontWeight: "bold",
//         color: "#000",
//         overflow: "hidden",
//         willChange: "transform",
//       }}
//     >
//       {hoverText}
//     </div>
//   );
// };

// export default CustomCursor;