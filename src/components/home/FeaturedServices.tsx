"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Musculaire",
        description: "Récupération sportive, apaisement des tensions et nœuds, traitement des fascias, drainage musculaire.",
        price: "Dès 75€",
        duration: "1h à 1h30",
        image: "/service-1.jpg",
    },
    {
        title: "Relaxant",
        description: "Enveloppement, détente psychique et mentale, lâcher prise, restauration du capital fatigue.",
        price: "Dès 75€",
        duration: "1h à 1h30",
        image: "/service-4.jpg",
    },
    {
        title: "Énergétique",
        description: "Rééquilibrage énergétique, drainage des toxines, circulation sanguine et oxygénation.",
        price: "Dès 75€",
        duration: "1h à 1h30",
        image: "/service-5.jpg",
    },
];

export function FeaturedServices() {
    return (
        <Section className="bg-[#FDFBF7] py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#8F4626] font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 block"
                    >
                        Mes Massages
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-6"
                    >
                        Une approche sur mesure
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
                                <h3 className="text-3xl font-serif text-[#2C2C2C] mb-3 group-hover:text-[#8F4626] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 mb-6 leading-relaxed font-sans text-sm flex-grow">
                                    {service.description}
                                </p>

                                {/* Price Display - Modified layout */}
                                <div className="flex items-center justify-center md:justify-end border-t border-gray-200 pt-4 mt-2">

                                    <Link href="/services">
                                        <Button
                                            variant="outline"
                                            className="group/btn relative px-6 py-5 border-[#8F4626] text-[#8F4626] hover:bg-[#8F4626] hover:text-white rounded-full font-serif text-sm tracking-widest uppercase transition-all duration-300"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                En savoir plus
                                                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                                            </span>
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
