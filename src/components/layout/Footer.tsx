"use client"
import Link from "next/link";
import messagesEn from "@/messages/en.json";
import messagesAr from "@/messages/ar.json";

export default function Footer({ locale }: { locale: string }) {
  const t = locale === "ar" ? messagesAr : messagesEn;
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#hero", label: "Home" },
    { href: "#essence", label: "Essence" },
    { href: "#notes", label: "Notes" },
    { href: "#craft", label: "Craft" },
  ];

  return (
    <footer className="w-full bg-foreground/5 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Aura</h3>
            <p className="text-foreground/60 text-sm">
              Discover the essence of luxury fragrances
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/60 text-sm hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@aura.com"
                  className="text-foreground/60 text-sm hover:text-foreground transition-colors duration-200"
                >
                  info@aura.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-foreground/60 text-sm hover:text-foreground transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Aura. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-foreground/60 text-sm hover:text-foreground transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-foreground/60 text-sm hover:text-foreground transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
