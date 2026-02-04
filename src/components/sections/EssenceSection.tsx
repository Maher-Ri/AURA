"use client"
import messagesEn from "@/messages/en.json";
import messagesAr from "@/messages/ar.json";

export default function EssenceSection({ title, locale = "en", id }: { title: string; locale?: string; id: string }) {
  const t = locale === "ar" ? messagesAr.essence : messagesEn.essence;

  return (
    <section id={id} className="section">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-foreground mb-6">{title}</h2>
        <p className="text-base text-muted leading-relaxed">Experience the perfect blend of craftsmanship and elegance</p>
      </div>
    </section>
  )
}
