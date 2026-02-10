"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { contentFade } from '@/lib/animations';
import { type Locale, translations } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

const HeroSection: React.FC<Props> = ({ locale }) => {
  // Access translations safely
  const t = translations[locale]?.hero || translations['en'].hero;
  
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden select-none">
      
      {/* Background Image with Zoom Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <motion.img 
          src="/hero-bg.jpg" 
          alt="Luxury Essence" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </motion.div>

      {/* Text Content */}
      <motion.div 
        variants={contentFade}
        initial="initial"
        animate="animate"
        className="relative z-10 text-center px-6"
      >
        <motion.span 
          initial={{ opacity: 0, letterSpacing: '1em' }}
          animate={{ opacity: 1, letterSpacing: '0.6em' }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-aura-gold text-[10px] md:text-[12px] uppercase block mb-6 font-sans font-bold"
        >
          {t.subtitle}
        </motion.span>
        
        {/* Main Title - Using Playfair (serif) */}
        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-serif mb-10 text-white leading-[0.9]">
          {t.title} <span className="italic opacity-80">{t.titleItalic}</span>
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
          <button className="luxury-button luxury-button-primary">
            {t.collection}
          </button>
          <button className="luxury-button luxury-button-outline">
            {t.film}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;