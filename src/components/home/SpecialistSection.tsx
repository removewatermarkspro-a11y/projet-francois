"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function SpecialistSection() {
    return (
        <section className="bg-[#EBE9E4] relative">
            {/* Gradient Fade from previous section (FeaturedServices - #FDFBF7) */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FDFBF7] to-transparent pointer-events-none" />
            <div className="grid md:grid-cols-2 min-h-[600px]">

                {/* Text Content - Left Side */}
                <div className="flex flex-col justify-center p-12 md:p-20 order-2 md:order-1">
                    <span className="text-gray-500 font-sans tracking-widest uppercase text-xs mb-6 block">
                        Votre Praticien
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2C2C2C] mb-8 leading-[1.1]">
                        Votre bien-être <br /> entre des mains <span className="text-[#8F4626]">expertes</span>
                    </h2>
                    <p className="text-gray-600 mb-10 text-lg font-medium leading-relaxed max-w-md">
                        Avec des années d'expérience et une passion pour le bien-être,
                        je mets à votre service une expertise qualifiée dans une variété
                        de techniques thérapeutiques.
                    </p>

                    <Link href="/about">
                        <Button className="bg-[#8F4626] hover:bg-[#7A3A1E] text-white rounded-full px-10 py-6 text-lg w-fit">
                            Mon parcours
                        </Button>
                    </Link>

                    {/* Avatars removed as requested (single practitioner) */}
                </div>

                {/* Image - Right Side */}
                <div className="order-1 md:order-2 flex items-center justify-center p-8 md:p-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Using service-7.jpg which matches the 'Samuel' or specialist image renamed */}
                        <Image
                            src="/service-7.jpg"
                            alt="Soin visage nature"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover hover:scale-110 transition-transform duration-1000 ease-out"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
