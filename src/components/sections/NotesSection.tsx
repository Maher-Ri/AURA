"use client"
import messagesEn from "@/messages/en.json";
import messagesAr from "@/messages/ar.json";

export default function NotesSection({ title, locale = "en", id }: { title: string; locale?: string; id: string }) {
  const t = locale === "ar" ? messagesAr.notes : messagesEn.notes;

  return (
    <section id={id} className="section">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-accent mb-8">{title}</h2>
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-foreground/5 border border-accent/20">
            <p className="text-foreground font-semibold">Top Notes</p>
            <p className="text-muted text-sm mt-2">Fresh & Citrus</p>
          </div>
          <div className="p-6 rounded-lg bg-foreground/5 border border-accent/20">
            <p className="text-foreground font-semibold">Heart Notes</p>
            <p className="text-muted text-sm mt-2">Floral & Spice</p>
          </div>
          <div className="p-6 rounded-lg bg-foreground/5 border border-accent/20">
            <p className="text-foreground font-semibold">Base Notes</p>
            <p className="text-muted text-sm mt-2">Warm & Woody</p>
          </div>
        </div>
      </div>
    </section>
  )
}
