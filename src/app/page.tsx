"use client";

import { useEffect, useRef, useState } from "react";

import HeroSection from "@/components/sections/HeroSection";
import EssenceSection from "@/components/sections/EssenceSection";
import NotesSection from "@/components/sections/NotesSection";
import CraftSection from "@/components/sections/CraftSection";
import BottleSection from "@/components/sections/BottleSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

const sections = [
  HeroSection,
  EssenceSection,
  NotesSection,
  CraftSection,
  BottleSection,
  ExperienceSection,
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const isLocked = useRef(false);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isLocked.current) return;
      isLocked.current = true;

      setIndex((prev) => {
        if (e.deltaY > 0) return Math.min(prev + 1, sections.length - 1);
        if (e.deltaY < 0) return Math.max(prev - 1, 0);
        return prev;
      });

      // unlock after short delay
      setTimeout(() => {
        isLocked.current = false;
      }, 1500);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <main className="relative w-full h-full">
      {sections.map((Section, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
          style={{
            opacity: i === index ? 1 : 0,
            pointerEvents: i === index ? "auto" : "none",
          }}
        >
          <Section isVisible={i === index} />
        </div>
      ))}
    </main>
  );
}
