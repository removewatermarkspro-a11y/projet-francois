import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";


const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nuagemassage-paris.com"),
  title: {
    default: "Nuage Massage Paris | Masseur Professionnel à Domicile & Cabinet",
    template: "%s | Nuage Massage Paris",
  },
  description: "Profitez d'un moment de détente absolu avec Nuage Massage Paris. François, masseur professionnel, vous propose des massages bien-être et sur mesure à Paris (à domicile ou en cabinet).",
  keywords: ["Massage", "Paris", "Masseur Professionnel", "Bien-être", "Détente", "Massage à domicile", "Nuage Massage", "François Masseur"],
  openGraph: {
    title: "Nuage Massage Paris | Masseur Professionnel",
    description: "Découvrez Nuage Massage à Paris. Des massages bien-être sur mesure, par François, pour un moment de relaxation profonde.",
    url: "https://www.nuagemassage-paris.com",
    siteName: "Nuage Massage Paris",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Nuage Massage Paris Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "FkKLNTCWa2BlCZxWu5WkveV0SENrDO2Kclid228lHXo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
