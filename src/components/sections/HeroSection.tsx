"use client"
import messagesEn from "@/messages/en.json";
import messagesAr from "@/messages/ar.json";

export default function HeroSection({ title, locale = "en", id }: { title: string; locale?: string; id: string }) {
  const t = locale === "ar" ? messagesAr.hero : messagesEn.hero;

  return (
    <section id={id} className="section">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-lg text-muted">Discover luxury in every breath</p>
      </div>
    </section>
  )
}
