"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PromoPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenShown, setHasBeenShown] = useState(false);

    useEffect(() => {
        // Check if we already showed it this session (optional, but good UX)
        // For now, simple timer every reload as requested "au bout de 15sec sur le site"
        // To prevent spamming, we can use sessionStorage.
        const alreadyShown = sessionStorage.getItem("promoShown");

        if (!alreadyShown) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                setHasBeenShown(true);
                sessionStorage.setItem("promoShown", "true");
            }, 15000); // 15 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="relative bg-[#FDFBF7] w-full max-w-md p-8 rounded-2xl shadow-2xl border border-[#8F4626]/20 text-center overflow-hidden"
                >
                    {/* Background Decoration */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#8F4626]" />
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D17A4A]/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#8F4626]/10 rounded-full blur-2xl" />

                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#8F4626] transition-colors"
                        aria-label="Fermer"
                    >
                        <X className="w-6 h-6" />
                    </button>



                    <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#8F4626] mb-2 block">
                        Offre de Bienvenue
                    </span>

                    <h2 className="text-4xl font-serif text-[#2C2C2C] mb-4">
                        -15% <span className="text-xl align-middle italic font-light">sur votre 1er soin</span>
                    </h2>

                    <p className="text-gray-600 mb-8 font-sans font-light leading-relaxed">
                        Profitez d'un moment de détente absolue à prix réduit.
                        L'occasion idéale de découvrir notre univers.
                    </p>

                    <div className="flex flex-col gap-3">
                        <Button
                            size="lg"
                            className="w-full bg-[#8F4626] hover:bg-[#6D321A] text-white rounded-full"
                            onClick={() => {
                                setIsOpen(false);
                                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Réserver maintenant
                        </Button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-xs text-gray-400 underline hover:text-gray-600 transition-colors"
                        >
                            Non merci, je préfère payer plein tarif
                        </button>
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
