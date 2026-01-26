import type { Metadata } from "next";
import { Italiana, Manrope } from "next/font/google";
import "./globals.css";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { PromoPopup } from "@/components/ui/PromoPopup";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "François - Masseur Professionnel",
  description: "Massages bien-être et relaxation à domicile ou en cabinet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${italiana.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased text-foreground bg-background">
        {children}
        <AudioPlayer />
        <PromoPopup />
      </body>
    </html>
  );
}
