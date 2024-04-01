"use client";

import { motion } from "framer-motion";

export default function SectioDevider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{  delay: 0.35 }}
      className="my-24 h-16 w-1 bg-gray-200 rounded-full hidden sm:block"
    ></motion.div>
  );
}
