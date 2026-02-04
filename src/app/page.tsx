"use client";

import messagesEn from "@/messages/en.json";
import messagesAr from "@/messages/ar.json";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import BottleSection from "@/components/sections/BottleSection";
import CraftSection from "@/components/sections/CraftSection";
import EssenceSection from "@/components/sections/EssenceSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import NotesSection from "@/components/sections/NotesSection";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [locale, setLocale] = useState("en");

  // Set locale from browser or default to en
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en";
    setLocale(savedLocale);
  }, []);

  // Select messages based on locale
  const messages = locale === "ar" ? messagesAr : messagesEn;

  // Direction for styling if needed
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <main dir={dir} className="relative w-full h-full font-sans bg-background text-foreground">
      <Nav locale={locale} />
      <HeroSection title={messages.hero.title} id="hero" />
      {/* <EssenceSection title={messages.essence.title} id="essence" />
      <NotesSection title={messages.notes.title} id="notes" />
      <CraftSection title={messages.craft.title} id="craft" />
      <BottleSection title={messages.bottle.title} id="bottle" />
      <ExperienceSection title={messages.closing.title} id="experience" /> */}
      <Footer locale={locale} />
    </main>
  );
}
