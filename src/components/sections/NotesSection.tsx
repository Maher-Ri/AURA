"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { contentFade } from '@/lib/animations';
import { type Locale, translations } from '@/lib/i18n';

interface Props {
  locale: Locale;
}

const NotesSection: React.FC<Props> = ({ locale }) => {
  const t = translations[locale].notes;
  
  const notesData = [
    { 
      name: t.saffron, 
      type: t.top, 
      img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      name: t.oud, 
      type: t.heart, 
      img: 'https://alharamainperfumes.co.uk/cdn/shop/articles/Untitled_design_9.png?v=1593011004' 
    },
    { 
      name: t.amber, 
      type: t.base, 
      img: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=600' 
    },
  ];

  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-aura-black px-10 overflow-hidden">
      
      {/* Header Content */}
      <motion.div 
        variants={contentFade} 
        initial="initial" 
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-4 italic text-white">
          {t.title}
        </h2>
        <div className="w-20 h-[1px] bg-aura-gold mx-auto mb-6" />
        <p className="max-w-xl mx-auto text-white/50 text-[10px] md:text-xs uppercase tracking-widest leading-relaxed font-sans">
          {t.desc}
        </p>
      </motion.div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl">
        {notesData.map((note, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (idx * 0.2), duration: 1 }}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="aspect-[3/4] overflow-hidden mb-6 relative bg-zinc-900">
              <img 
                src={note.img} 
                alt={note.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" 
              />
              {/* Border Overlay */}
              <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-colors duration-500" />
            </div>
            
            {/* Note Title */}
            <h3 className="font-serif text-2xl mb-1 text-white/90 group-hover:text-white transition-colors">
              {note.name}
            </h3>
            
            {/* Note Type */}
            <span className="text-[10px] uppercase tracking-[0.2em] text-aura-gold font-bold">
              {note.type}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NotesSection;