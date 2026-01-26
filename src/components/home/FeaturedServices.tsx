"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Massage Suédois",
        description: "Une détente musculaire profonde pour évacuer le stress et les tensions du quotidien.",
        price: "80€",
        duration: "60 min",
        image: "/service-1.jpg",
    },
    {
        title: "Deep Tissue",
        description: "Idéal pour les sportifs, ce soin cible les couches profondes des muscles pour une récupération optimale.",
        price: "90€",
        duration: "60 min",
        image: "/service-2.jpg",
    },
    {
        title: "Lomi Lomi",
        description: "Un massage hawaïen fluide et rythmé, comme le mouvement des vagues, pour une évasion totale.",
        price: "85€",
        duration: "60 min",
        image: "/service-3.jpg",
    },
];

export function FeaturedServices() {
    return (
        <Section className="bg-[#FDFBF7] py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#5A6C58] font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 block"
                    >
                        Mes Soins Signatures
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-6"
                    >
                        Éveillez vos sens
                    </motion.h2>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                            whileHover={{ y: -8 }}
                            className="group flex flex-col h-full bg-transparent"
                        >
                            {/* Image Container - Rounded Angles */}
                            <div className="relative h-[450px] overflow-hidden rounded-[2rem] shadow-lg mb-8">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow px-2 text-center md:text-left">
                                <h3 className="text-3xl font-serif text-[#2C2C2C] mb-3 group-hover:text-[#5A6C58] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 mb-6 leading-relaxed font-sans text-sm flex-grow">
                                    {service.description}
                                </p>

                                {/* Price Display - Modified layout */}
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-2">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-sans uppercase tracking-wider">Durée & Tarif</span>
                                        <div className="flex items-baseline gap-2 text-[#5A6C58] font-serif text-lg">
                                            <span className="font-semibold">{service.duration}</span>
                                            <span className="text-gray-300">•</span>
                                            <span className="font-semibold">{service.price}</span>
                                        </div>
                                    </div>

                                    <Link href="/services">
                                        <Button variant="ghost" className="p-0 hover:bg-transparent text-[#2C2C2C] hover:text-[#5A6C58] font-serif italic text-lg transition-colors">
                                            En savoir plus
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
