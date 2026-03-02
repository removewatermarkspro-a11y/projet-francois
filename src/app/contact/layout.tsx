import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact & Accès",
    description: "Contactez Nuage Massage Paris pour réserver votre séance. Déplacement à domicile sur Paris et banlieue proche. Téléphone : 06 99 42 04 64.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
