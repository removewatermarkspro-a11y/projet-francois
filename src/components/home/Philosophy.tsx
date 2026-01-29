"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

export function Philosophy() {
    return (
        <Section className="bg-[#FDFBF7]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500"
                >
                    <Image
                        src="/samuel.jpg"
                        alt="Masseur en action"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:pl-10"
                >
                    <span className="text-[#8F4626] font-bold tracking-widest uppercase text-xs mb-4 block">
                        Philosophie
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-8 leading-tight">
                        Une approche <span className="text-[#A65D3D] italic">holistique</span> du massage
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        Tout le monde a un rapport unique à son corps, une problématique musculaire, des tensions ciblées,
                        un besoin de lâcher prise à cause d’un stress trop intense ou encore effectuer un rééquilibrage énergétique.
                    </p>
                    <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                        Mes prestations sont un échange entre vous et moi, ma pratique, mon savoir, mes intuitions et vos besoins, vos attentes.
                    </p>

                    <div className="pl-6 border-l-4 border-[#8F4626] italic text-gray-700 text-xl font-serif">
                        &quot;Se faire masser c’est aussi une hygiène de vie. Il s’agit d’accorder de l’importance à son bien-être physique et mental.&quot;
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
