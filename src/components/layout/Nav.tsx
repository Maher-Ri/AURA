"use client"
import Link from "next/link";
import messagesEn from "@/messages/en.json";
import messagesAr from "@/messages/ar.json";

export default function Nav({ locale }: { locale: string }) {
  const t = locale === "ar" ? messagesAr : messagesEn;
  
  const navItems = [
    { href: "#hero", label: "Hero", key: "hero" },
    { href: "#essence", label: "Essence", key: "essence" },
    { href: "#notes", label: "Notes", key: "notes" },
    { href: "#craft", label: "Craft", key: "craft" },
    { href: "#bottle", label: "Bottle", key: "bottle" },
    { href: "#experience", label: "Experience", key: "closing" },
  ];

  const handleLanguageChange = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    localStorage.setItem("locale", newLocale);
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
            Aura
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={handleLanguageChange}
            className="text-sm font-medium px-3 py-2 rounded-md bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors duration-200"
          >
            {locale === "ar" ? "EN" : "AR"}
          </button>
        </div>
      </div>
    </nav>
  );
}
