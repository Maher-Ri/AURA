"use client"
import messagesEn from "@/messages/en.json";
import messagesAr from "@/messages/ar.json";

export default function BottleSection({ title, locale = "en", id }: { title: string; locale?: string; id: string }) {
  const t = locale === "ar" ? messagesAr.bottle : messagesEn.bottle;

  return (
    <section id={id} className="section">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-foreground mb-8">{title}</h2>
        <div className="w-32 h-64 mx-auto bg-gradient-to-b from-accent/20 to-accent/5 rounded-lg border-2 border-accent mb-8 flex items-center justify-center">
          <p className="text-accent font-semibold">Premium Bottle</p>
        </div>
        <p className="text-muted max-w-lg mx-auto">Elegantly designed glass bottle with sophisticated packaging</p>
      </div>
    </section>
  )
}
