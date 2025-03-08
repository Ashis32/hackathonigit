"use client"; // Ensure it runs on the client side

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FlippableTextProps {
  text: string;
}

const FlippableTextAuto: React.FC<FlippableTextProps> = ({ text }) => {
  const [flippedIndex, setFlippedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedIndex((prev) => (prev + 2) % text.length);
    }, 1000); // Change letter every 500ms

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex space-x-4 text-[100px] font-extrabold tracking-wide text-red-700">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block text-gray-900 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transform-gpu"
          animate={index === flippedIndex ? { rotateX: 360 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default FlippableTextAuto;