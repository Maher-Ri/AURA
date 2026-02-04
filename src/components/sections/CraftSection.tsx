"use client"
import messagesEn from "@/messages/en.json";
import messagesAr from "@/messages/ar.json";

export default function CraftSection({ title, locale = "en", id }: { title: string; locale?: string; id: string }) {
  const t = locale === "ar" ? messagesAr.craft : messagesEn.craft;

  return (
    <section id={id} className="section">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-foreground mb-6">{title}</h2>
        <p className="text-base text-muted leading-relaxed mb-8">Meticulously crafted with premium ingredients and traditional techniques passed down through generations</p>
        <div className="inline-block px-8 py-3 rounded-full border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-background transition-colors duration-300 cursor-pointer">
          Explore Our Process
        </div>
      </div>
    </section>
  )
}
