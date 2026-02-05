"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  isVisible: boolean; // controlled by parent (page.tsx)
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          key="hero"
          className="section relative overflow-hidden flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0.9, opacity: 0 }} // scale in start
            animate={{ scale: 1, opacity: 1 }} // scale in on enter
            exit={{ scale: 0.9, opacity: 0 }} // scale out on exit
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              backgroundImage: "url('/hero-bg.png')", // replace with your image path
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
              filter: "brightness(50%)", /* lowers brightness */
            }}
          />

          {/* === Smoke / Spray effect behind perfume === */}
          {/* <motion.img
            className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="/smoke.jpg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          /> */}
          <h1
            className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[120px] font-bold text-[#f8f5f0] z-9"
            style={{
              textShadow: `
      0 0 3px #f8f5f0,
      0 0 5px #f8f5f0,
      0 0 10px #f8f5f0,
      0 0 10px #f8f5f0 
    `,
            }}
          >
            AURA
          </h1>

          {/* === Floating perfume bottle === */}
          <motion.div
            className="absolute bottom-[24%] left-1/2 -translate-x-1/2 w-64 h-96 z-10"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src="/hero-bottle.png"
              alt="Aura Perfume"
              fill
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* === Hero content === */}
          <motion.div
            className="relative z-20 text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            <p className="mb-22 text-2xl text-[#f8f5f0]">
              The Essence of Luxury Perfume
            </p>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
