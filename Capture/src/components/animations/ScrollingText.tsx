"use client"; // Ensure it's a client component

import { motion } from "framer-motion";

const ScrollingText: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white text-black py-10">
      {/* Motion div for smooth scrolling text effect */}
      <motion.div
        className="whitespace-nowrap text-[100px] font-bold uppercase opacity-50"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        Saturn Technologies - Innovation for the Future • Saturn Technologies - Innovation for the Future •
      </motion.div>
    </div>
  );
};

export default ScrollingText;