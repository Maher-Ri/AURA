"use client";

import React from 'react';
import { type Locale, translations } from '@/lib/i18n';

interface NavProps {
  currentSection: number;
  onNavigate: (index: number) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const Nav: React.FC<NavProps> = ({ currentSection, onNavigate, locale, setLocale }) => {
  const t = translations[locale];
  
  // We map the labels to their specific index to ensure alignment with the main slide logic
  const navLinks = [
    { label: t.nav.aura, index: 0 },
    { label: t.nav.notes, index: 1 },
    { label: t.nav.essence, index: 2 },
    { label: t.nav.bottle, index: 3 },
    { label: t.nav.craft, index: 4 },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-10 py-8 flex justify-between items-center mix-blend-difference">
      {/* Brand Logo */}
      <button 
        className="text-2xl font-bold tracking-[0.3em] uppercase font-serif text-white cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => onNavigate(0)}
      >
        {t.brand}
      </button>
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-10 text-[9px] uppercase tracking-[0.4em] font-semibold text-white/70 font-sans">
        {navLinks.map((item) => (
          <button 
            key={item.index} 
            onClick={() => onNavigate(item.index)}
            className={`
              hover:text-white transition-all duration-500 relative group 
              ${currentSection === item.index ? 'text-white' : ''}
            `}
          >
            {item.label}
            {/* Animated Underline */}
            <span 
              className={`
                absolute -bottom-2 left-0 h-[1px] bg-white transition-all duration-700 
                ${currentSection === item.index ? 'w-full' : 'w-0 group-hover:w-full'}
              `} 
            />
          </button>
        ))}
      </div>

      {/* Language Switcher */}
      <div className="flex gap-4 items-center font-sans font-semibold">
        <button 
          onClick={() => setLocale('en')}
          className={`
            text-[9px] uppercase tracking-[0.2em] transition-colors 
            ${locale === 'en' ? 'text-aura-gold' : 'text-white/40 hover:text-white'}
          `}
        >
          EN
        </button>
        
        <div className="w-[1px] h-3 bg-white/20"></div>
        
        <button 
          onClick={() => setLocale('ar')}
          className={`
            text-[10px] uppercase tracking-[0.2em] transition-colors 
            ${locale === 'ar' ? 'text-aura-gold' : 'text-white/40 hover:text-white'}
          `}
        >
          عربي
        </button>
      </div>
    </nav>
  );
};

export default Nav;