"use client"; // Ensures it's a client-side component

import { useEffect } from "react";
import gsap from "gsap";

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    // Move cursor with mouse
    const moveCursor = (event: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: event.clientX, // Exact mouse position
          y: event.clientY, // Exact mouse position
          duration: 0.3, // Minimal lag for fast movement
          ease: "power1.out", // Smooth easing
        });
      }
    };

    // Scale up cursor on hover over interactive elements
    const scaleUpCursor = () => {
      if (cursor) {
        gsap.to(cursor, {
          scale: 4, // Scale up the cursor
          duration: 0.2,
          ease: "power1.out",
  backgroundColor: 'rgba(144, 238, 144, 0.7)' // Light green with some transparency
        });
      }
    };

    // Reset cursor scale when not hovering over interactive elements
    const resetCursor = () => {
      if (cursor) {
        gsap.to(cursor, {
          scale: 1, // Reset to original size
          duration: 0.2,
          ease: "power1.out",
          backgroundColor: '#34d399'
          // backgroundColor: 'white'
        });
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", moveCursor);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, img, .interactive");
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", scaleUpCursor);
      element.addEventListener("mouseleave", resetCursor);
    });

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", scaleUpCursor);
        element.removeEventListener("mouseleave", resetCursor);
      });
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        id="cursor"
        className="fixed w-[15px] h-[15px] bg-green-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{
          top: '0px',
          left: '0px',
        }}
      />
    </>
  );
};

export default CursorEffect;

//  "use client"; // Ensures it's a client-side component
// import { useEffect, useState } from "react";

// const CursorEffect = () => {
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
//   const maxTrailLength = 15; // Increased trail length for smoother effect

//   useEffect(() => {
//     const cursor = document.getElementById("cursor");
//     let trailDots: { x: number; y: number; id: number }[] = [];
//     let lastTimestamp = 0;
//     const minTimeBetweenDots = 16; // Decreased time between dots for smoother trail (roughly 60fps)

//     const moveCursor = (event: MouseEvent) => {
//       const currentTimestamp = Date.now();
      
//       setCursorPos({
//         x: event.clientX,
//         y: event.clientY
//       });

//       if (currentTimestamp - lastTimestamp > minTimeBetweenDots) {
//         trailDots.push({
//           x: event.clientX,
//           y: event.clientY,
//           id: currentTimestamp,
//         });

//         if (trailDots.length > maxTrailLength) {
//           trailDots = trailDots.slice(-maxTrailLength);
//         }

//         setTrail([...trailDots]);
//         lastTimestamp = currentTimestamp;
//       }
//     };

//     const scaleUpCursor = () => {
//       if (cursor) {
//         cursor.style.transform = "translate(-50%, -50%) scale(2)";
//       }
//     };

//     const resetCursor = () => {
//       if (cursor) {
//         cursor.style.transform = "translate(-50%, -50%) scale(1)";
//       }
//     };

//     document.addEventListener("mousemove", moveCursor);
//     const interactiveElements = document.querySelectorAll("a, button, .interactive");
//     interactiveElements.forEach((element) => {
//       element.addEventListener("mouseenter", scaleUpCursor);
//       element.addEventListener("mouseleave", resetCursor);
//     });

//     return () => {
//       document.removeEventListener("mousemove", moveCursor);
//       interactiveElements.forEach((element) => {
//         element.removeEventListener("mouseenter", scaleUpCursor);
//         element.removeEventListener("mouseleave", resetCursor);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Trail dots - rendered in reverse for proper layering */}
//       {trail.slice().reverse().map((dot, index) => {
//         const size = Math.max(4, 15 * (1 - index / maxTrailLength)); // Dynamic size that decreases along the trail
//         const opacity = Math.max(0.1, 1 - (index / maxTrailLength)); // More gradual opacity fade
        
//         return (
//           <div
//             key={dot.id}
//             className="fixed rounded-full pointer-events-none blur-[1px]"
//             style={{
//               top: `${dot.y}px`,
//               left: `${dot.x}px`,
//               width: `${size}px`,
//               height: `${size}px`,
//               opacity,
//               backgroundColor: 'rgb(34, 197, 94)', // green-500
//               transform: 'translate(-50%, -50%)',
//               transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out',
//               boxShadow: '0 0 4px rgba(34, 197, 94, 0.3)', // Subtle glow effect
//             }}
//           />
//         );
//       })}
      
//       {/* Main cursor */}
//       <div
//         id="cursor"
//         className="fixed w-[15px] h-[15px] bg-green-500 rounded-full pointer-events-none z-50 shadow-lg"
//         style={{
//           top: `${cursorPos.y}px`,
//           left: `${cursorPos.x}px`,
//           transform: 'translate(-50%, -50%)',
//           transition: 'transform 0.2s ease-out, top 0.15s linear, left 0.15s linear',
//           boxShadow: '0 0 6px rgba(34, 197, 94, 0.5)', // Stronger glow for main cursor
//         }}
//       />
//     </>
//   );
// };

// export default CursorEffect;