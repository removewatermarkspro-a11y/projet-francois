import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À Propos",
    description: "Découvrez le parcours de François, masseur professionnel à Paris. Une approche bienveillante et personnalisée pour votre bien-être physique et mental.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
