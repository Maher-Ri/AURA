"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { contentFade } from '@/lib/animations';
import { type Locale, translations } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

const EssenceSection: React.FC<Props> = ({ locale }) => {
  const t = translations[locale].essence;
  
  return (
    <section className="relative w-full h-full flex items-center justify-center bg-aura-black overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-full">
        
        {/* Left: Image Side */}
        <div className="relative overflow-hidden h-[40vh] md:h-full group">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
            alt="Essence" 
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to ensure the image blends with the dark theme */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
        </div>

        {/* Right: Content Side */}
        <div className="flex flex-col justify-center px-10 md:px-24 bg-aura-black text-left">
          <motion.div 
            variants={contentFade} 
            initial="initial" 
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Tagline */}
            <span className="text-aura-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold font-sans">
              {t.tag}
            </span>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-white">
              {t.title}
            </h2>
            
            {/* Description */}
            <p className="text-white/60 leading-loose text-sm mb-8 font-sans max-w-md">
              {t.desc}
            </p>
            
            {/* Gold Divider */}
            <div className="w-24 h-[1px] bg-aura-gold mb-8" />
            
            {/* CTA Button */}
            <button className="text-xs uppercase tracking-[0.3em] font-bold text-white hover:text-aura-gold transition-colors duration-500 cursor-pointer">
              {t.cta}
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default EssenceSection;