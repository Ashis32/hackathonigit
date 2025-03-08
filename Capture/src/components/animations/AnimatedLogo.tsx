"use client";

import { motion } from "framer-motion";

const AnimatedLogo: React.FC = () => {
  return (
    <motion.img
      src="/images/saturn-wordmark.png"
      width={500}
      height={100}
      alt="Logo"
      className="max-w-lg object-contain pt-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

export default AnimatedLogo;