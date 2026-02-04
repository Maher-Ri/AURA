"use client"
import messagesEn from "@/messages/en.json";
import messagesAr from "@/messages/ar.json";

export default function ExperienceSection({ title, locale = "en", id }: { title: string; locale?: string; id: string }) {
  const t = locale === "ar" ? messagesAr.closing : messagesEn.closing;

  return (
    <section id={id} className="section">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-foreground mb-6">{title}</h2>
        <p className="text-lg text-muted mb-8">Transform your everyday moments into extraordinary memories</p>
        <button className="px-8 py-3 rounded-full bg-accent text-background font-semibold hover:bg-accent/90 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </section>
  )
}
