"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Placeholder Imports (Uncomment these as you convert the files) ---
import Nav from './layout/Nav';
import HeroSection from './sections/HeroSection';
import EssenceSection from './sections/EssenceSection';
// import Footer from './layout/Footer';
// import HeroSection from './sections/HeroSection';
// import NotesSection from './sections/NotesSection';
// import EssenceSection from './sections/EssenceSection';
// import { sectionVariants } from '@/lib/animations';


const Footer = () => <footer className="fixed bottom-6 w-full text-center text-xs text-white/30 z-50">© 2024 PERFUME HOUSE</footer>;
const sectionVariants = {
  initial: (direction: number) => ({ y: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  exit: (direction: number) => ({ y: direction < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } })
};

// Types
export type Locale = 'en' | 'ar';

const MainCanvas: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [locale, setLocale] = useState<Locale>('en');
  const isScrolling = useRef<boolean>(false);
  
  const isRTL = locale === 'ar';

  // Sections Configuration
  const sections = [
    // Replace placeholders with real components when ready
    { id: 'hero', component: <HeroSection locale={locale} /> },
    { id: 'notes', component: <EssenceSection locale={locale} /> },
    { id: 'essence', component: <div className="w-full h-full flex items-center justify-center text-6xl font-serif text-[#c5a059]">Essence Section</div> },
    { id: 'bottle', component: <div className="w-full h-full bg-[#0d0d0d] flex items-center justify-center italic font-serif text-4xl text-white">{isRTL ? 'الزجاجة' : 'The Bottle'}</div> },
    { id: 'craft', component: <div className="w-full h-full bg-black flex items-center justify-center italic font-serif text-4xl text-white">{isRTL ? 'الحرفية' : 'The Craft'}</div> },
  ];

  const sectionCount = sections.length;

  const navigateTo = useCallback((index: number) => {
    // Prevent out of bounds or rapid scrolling
    if (index < 0 || index >= sectionCount) return;
    if (index === currentSection || isScrolling.current) return;
    
    setDirection(index > currentSection ? 1 : -1);
    setCurrentSection(index);
    isScrolling.current = true;

    setTimeout(() => {
      isScrolling.current = false;
    }, 1200);
  }, [currentSection, sectionCount]);

  const handleScroll = useCallback((deltaY: number) => {
    if (Math.abs(deltaY) < 30) return;
    
    if (deltaY > 0 && currentSection < sectionCount - 1) {
      navigateTo(currentSection + 1);
    } else if (deltaY < 0 && currentSection > 0) {
      navigateTo(currentSection - 1);
    }
  }, [currentSection, sectionCount, navigateTo]);

  useEffect(() => {
    // Next.js: Ensure window exists (Client-side check)
    if (typeof window === 'undefined') return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault(); // Prevent default browser scroll
      handleScroll(e.deltaY);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') handleScroll(100);
      if (e.key === 'ArrowUp') handleScroll(-100);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [handleScroll]);

  return (
    <div 
      className="relative w-screen h-screen bg-black overflow-hidden select-none font-sans"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Ambience */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(circle,rgba(197,160,89,0.05)_0%,transparent_70%)] rounded-full blur-[160px] pointer-events-none z-0"
      />

      <Nav 
        currentSection={currentSection} 
        onNavigate={navigateTo} 
        locale={locale} 
        setLocale={setLocale} 
      />
      
      <main className="w-full h-full relative z-10">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={`${currentSection}-${locale}`}
            custom={direction}
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {sections[currentSection].component}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Luxury Progress Indicators - Side flips in RTL */}
      <div className={`fixed ${isRTL ? 'right-6 md:right-10' : 'left-6 md:left-10'} top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 items-center`}>
        <span className="text-[10px] text-white/40 font-bold mb-2">0{currentSection + 1}</span>
        <div className="w-[1px] h-32 bg-white/10 relative">
          <motion.div 
            animate={{ top: `${(currentSection / (sectionCount - 1)) * 100}%` }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            // Tailwind 4 arbitrary values for shadow
            className="absolute left-0 w-[1px] h-8 bg-[#c5a059] shadow-[0_0_10px_rgba(197,160,89,0.5)]"
          />
        </div>
        <span className="text-[10px] text-white/40 font-bold mt-2">0{sectionCount}</span>
      </div>

      <Footer />
    </div>
  );
};

export default MainCanvas;