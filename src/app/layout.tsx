import { inter, arabic } from "@/app/fonts";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={`${inter.variable} ${arabic.variable}`}>
      <body className="font-sans">
        <div className="viewport">{children}</div>
      </body>
    </html>
  );
}
