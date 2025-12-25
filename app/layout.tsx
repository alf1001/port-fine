import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/themeProvider";
import { ThemeInitScript } from "./theme-script";

const outfit = Outfit({ subsets:["latin"], weight:["400","500","600","700"] });
const ovo = Ovo({ subsets:["latin"], weight:["400"] });

export const metadata: Metadata = { title: "Portfolio - Fine", description: "" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Harus muncul SEBELUM CSS dipakai */}
        <ThemeInitScript />
      </head>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
