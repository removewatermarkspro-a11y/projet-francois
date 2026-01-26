"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Video Background / Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/jeanne.jpg"
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-white mb-6 leading-[1.1]"
                >
                    Laissez-vous porter <br /> sur un <span className="italic">Nuage</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/90 mb-12 font-light max-w-2xl mx-auto tracking-wide font-sans"
                >
                    Nuage Massage : La légèreté retrouvée, au coeur de notre métier.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <Link href="/services">
                        <Button
                            size="lg"
                            className="bg-[#5A6C58] hover:bg-[#4A5848] text-white border-none text-sm md:text-base tracking-widest uppercase rounded-full min-w-[260px]"
                        >
                            Découvrez mes massages
                        </Button>
                    </Link>

                    <Button
                        size="lg"
                        className="bg-[#5A6C58] hover:bg-[#4A5848] text-white border-none text-sm md:text-base tracking-widest uppercase rounded-full min-w-[260px]"
                        onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Réserver
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] font-light">Découvrir</span>
                <div className="w-[1px] h-12 bg-white/40"></div>
            </motion.div>
        </section>
    );
}
