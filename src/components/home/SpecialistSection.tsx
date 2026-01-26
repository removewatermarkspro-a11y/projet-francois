"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function SpecialistSection() {
    return (
        <section className="bg-[#EBE9E4]">
            <div className="grid md:grid-cols-2 min-h-[600px]">

                {/* Text Content - Left Side */}
                <div className="flex flex-col justify-center p-12 md:p-20 order-2 md:order-1">
                    <span className="text-gray-500 font-sans tracking-widest uppercase text-xs mb-6 block">
                        Nos Spécialistes
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2C2C2C] mb-8 leading-[1.1]">
                        Votre bien-être <br /> entre des mains <span className="text-[#8F4626]">expertes</span>
                    </h2>
                    <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed max-w-md">
                        Avec des années d'expérience et une passion pour le bien-être,
                        chaque membre de notre équipe est hautement qualifié dans une variété
                        de techniques thérapeutiques.
                    </p>

                    <Link href="/about">
                        <Button className="bg-[#8F4626] hover:bg-[#7A3A1E] text-white rounded-full px-10 py-6 text-lg w-fit">
                            Rencontrer l'équipe
                        </Button>
                    </Link>

                    <div className="mt-12 flex gap-4">
                        {/* Team Avatars Placeholder */}
                        <div className="flex -space-x-4">
                            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative">
                                <Image src="/samuel.jpg" fill alt="Team 1" className="object-cover" />
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative">
                                <Image src="/jeanne.jpg" fill alt="Team 2" className="object-cover" />
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative">
                                <Image src="/service-4.jpg" fill alt="Team 3" className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image - Right Side */}
                <div className="relative h-[400px] md:h-auto order-1 md:order-2 overflow-hidden bg-gray-200">
                    {/* Using service-7.jpg which matches the 'Samuel' or specialist image renamed */}
                    <Image
                        src="/service-7.jpg"
                        alt="Soin visage nature"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                </div>

            </div>
        </section>
    );
}
