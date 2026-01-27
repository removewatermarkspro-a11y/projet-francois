"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            <Header />

            {/* Hero / Intro */}
            <Section className="pt-32 pb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] w-[400px] mx-auto rounded-full overflow-hidden shadow-2xl"
                    >
                        {/* Updated to francois.jpg as requested */}
                        <Image
                            src="/francois.jpg"
                            alt="François - Masseur"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >

                        <h1 className="text-5xl md:text-6xl font-serif text-[#2C2C2C] mb-8 leading-tight">
                            Mon <span className="italic">Parcours</span>
                        </h1>

                        <div className="space-y-6 text-gray-600 font-sans text-lg font-medium leading-relaxed">
                            <p>
                                Praticien diplômé d’état, je me suis formé auprès de professionnels qualifiés sur les différentes approches de massage qui font aujourd’hui ma main.
                            </p>
                            <p>
                                Issu d’un parcours en géopolitique et sciences sociales, j’ai commencé ma vie professionnelle en milieu associatif pour naturellement me porter sur le massage et développer une autre forme de suivi, d’attention et de mieux-être individuel.
                            </p>
                            <p>
                                Je souhaite amener les personnes que je suis lors de mes séances vers une écoute lucide et bienveillante de leurs besoins. Une approche humble et pertinente sur l’attention que l’on peut porter à son propre corps et à sa détente.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Philosophy / Values Section */}
            <Section className="bg-[#EBE9E4] py-20">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl font-serif text-[#2C2C2C] mb-8">Ma Philosophie</h2>
                    <p className="text-gray-600 font-sans text-lg font-medium italic leading-relaxed mb-8">
                        &quot;Se faire masser c’est aussi une hygiène de vie pour moi. Il s’agit d’accorder de l’importance à son bien-être physique et mental et de mettre en place des moments dédiés à cela.
                    </p>
                    <p className="text-gray-600 font-sans text-lg font-medium italic leading-relaxed mb-8">
                        Tout le monde a un rapport unique à son corps, une problématique musculaire, des tensions ciblées, un besoin de lâcher prise à cause d’un stress trop intense ou encore effectuer un rééquilibrage énergétique, mes prestations sont un échange entre vous et moi, ma pratique, mon savoir, mes intuitions et vos besoins, vos attentes.&quot;
                    </p>
                    <p className="text-gray-600 font-sans text-lg font-medium leading-relaxed mb-8">
                        Amateur de théâtre, cirque, modelage et arts martiaux, je travaille ma connaissance du corps humain au quotidien à travers mes pratiques.
                    </p>
                    <p className="bold text-[#8F4626] font-bold text-xl">
                        Proposer des prestations de qualité pour toustes, dans le respect des différences et l’absence de jugement discriminant.
                    </p>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
