import type { Metadata } from "next";
import { Jost, Manrope } from "next/font/google";
import "./globals.css";


const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
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
    <html lang="fr" className={`${jost.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
