"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function TranquilitySection() {
    return (
        <section className="relative py-20 bg-[#F9F9F9] overflow-hidden">
            <div className="container mx-auto px-4 relative flex flex-col items-center justify-center text-center min-h-[600px]">

                {/* Central Content */}
                <div className="relative z-20 max-w-3xl">
                    <span className="text-gray-500 font-sans tracking-widest uppercase text-xs mb-4 block">
                        Expérience Ultime
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] mb-8 leading-tight">
                        Où la tranquillité <br />
                        <span className="block mt-2">rencontre le <span className="italic text-[#8F4626]">bien-être</span></span>
                    </h2>
                    <p className="text-gray-600 mb-10 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                        Avec une attention particulière portée à la relaxation et à l'apaisement,
                        je vous propose une variété de soins sur mesure pour restaurer l'équilibre
                        et l'harmonie de votre corps et de votre esprit.
                    </p>
                    <Link href="/about">
                        <Button className="bg-gradient-to-r from-[#8F4626] to-[#A65D3D] hover:from-[#7A3A1E] hover:to-[#8F4626] text-white rounded-full px-10 py-6 text-lg shadow-lg">
                            En savoir plus
                        </Button>
                    </Link>
                </div>

                {/* Floating Bubble Images - Decorations - Verified paths */}
                {/* Top Left */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-0 md:left-10 w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 hidden md:block"
                >
                    <Image src="/jeanne.jpg" alt="Relaxation" fill className="object-cover" />
                </motion.div>

                {/* Bottom Left */}
                <motion.div
                    animate={{ y: [0, 25, 0] }}
                    transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-10 md:left-20 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 hidden md:block"
                >
                    <Image src="/service-2.jpg" alt="Ambience" fill className="object-cover" />
                </motion.div>

                {/* Top Right */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-0 md:right-10 w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 hidden md:block"
                >
                    <Image src="/service-5.jpg" alt="Massage Visage" fill className="object-cover" />
                </motion.div>

                {/* Middle Right */}
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 8, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 right-10 md:right-32 w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 hidden md:block"
                >
                    <Image src="/service-1.jpg" alt="Massage Dos" fill className="object-cover" />
                </motion.div>

                {/* Bottom Right */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6.5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-10 right-0 md:right-20 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 opacity-60 hidden md:block"
                >
                    <Image src="/service-3.jpg" alt="Huiles" fill className="object-cover" />
                </motion.div>

            </div>
        </section>
    );
}
