import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prestations & Tarifs",
    description: "Massages musculaires, relaxants et énergétiques. Découvrez la carte des prestations, les tarifs à la séance et forfaits pour des massages à domicile (Paris) ou en cabinet.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
