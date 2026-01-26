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
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Updated to francois.jpg as requested */}
                        <Image
                            src="/francois.jpg"
                            alt="François - Masseur"
                            fill
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
                        <span className="text-[#5A6C58] font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4">
                            À Propos
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif text-[#2C2C2C] mb-8 leading-tight">
                            Une passion pour <br /> <span className="italic">l'art du toucher.</span>
                        </h1>

                        <div className="space-y-6 text-gray-600 font-sans text-lg font-light leading-relaxed">
                            <p>
                                Bonjour, je suis François. Mon parcours dans le bien-être a commencé il y a plus de 10 ans,
                                poussé par une fascination pour la capacité du corps à s'auto-guérir lorsqu'il est écouté.
                            </p>
                            <p>
                                Diplômé des plus grandes écoles de massage (Institut de Masso-Kinésithérapie, Formation Spécialisée aux Techniques Orientales),
                                j'ai développé une approche unique qui mêle précision technique et intuition.
                            </p>
                            <p>
                                Pour moi, chaque massage est une conversation silencieuse. Je n'applique pas simplement une routine ;
                                j'adapte chaque mouvement à vos tensions, votre énergie et vos besoins du moment.
                            </p>
                            <p className="bold text-[#5A6C58] font-semibold">
                                Mon objectif est simple : vous permettre de lâcher prise totalement, pour repartir plus léger.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Philosophy / Values Section */}
            <Section className="bg-[#EBE9E4] py-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-serif text-[#2C2C2C] mb-6">Ma Philosophie</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Écoute", text: "Avant de toucher, j'écoute. Vos mots, mais aussi ce que votre corps exprime." },
                        { title: "Bienveillance", text: "Un espace sûr et sans jugement, où vous pouvez vous déposer en toute confiance." },
                        { title: "Excellence", text: "Une formation continue pour maîtriser les gestes les plus efficaces et précis." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-2xl font-serif text-[#5A6C58] mb-4">{item.title}</h3>
                            <p className="text-gray-600 font-sans font-light">{item.text}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Footer />
        </main>
    );
}
