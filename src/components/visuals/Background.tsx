"use client";

import { motion } from "framer-motion";

interface BackgroundProps {
  color?: string;
  image?: string;
}

export default function Background({ color = "#1C1C1C", image }: BackgroundProps) {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundColor: color,
        backgroundImage: image ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(50%)",
      }}
    />
  );
}
