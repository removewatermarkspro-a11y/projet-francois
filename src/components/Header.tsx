"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À Propos" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const isScrolledState = scrolled || !isHome;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolledState ? "py-3 bg-[#5A6C58]/95 backdrop-blur-md shadow-lg" : "py-6 bg-gradient-to-b from-black/20 to-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo - Made Bigger */}
                <Link href="/" className="relative w-56 h-24 md:w-80 md:h-28 transition-transform hover:scale-105">
                    <Image
                        src="/logo.png"
                        alt="Nuage Nuage Nuage"
                        fill
                        className="object-contain object-left md:object-center" // Ensure alignment
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-sans font-bold tracking-[0.2em] text-white hover:text-white/80 transition-colors uppercase"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        size="sm"
                        className="rounded-full px-8 bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-white hover:text-[#5A6C58]"
                        onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Réserver
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden fixed inset-0 z-[100] flex flex-col pt-32 bg-[#5A6C58] overflow-y-auto" // Added overflow-y-auto for menu content scrolling if needed
                    >
                        <div className="container mx-auto px-4 flex flex-col gap-8 items-center text-center pb-20">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-serif text-3xl text-white hover:text-white/80"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button
                                size="lg"
                                className="mt-4 rounded-full px-10 text-base bg-white text-[#5A6C58] hover:bg-gray-100"
                                onClick={() => { setIsOpen(false); document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }); }}
                            >
                                Réserver
                            </Button>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="mt-8 p-4 text-white/50 hover:text-white"
                            >
                                <span className="text-sm uppercase tracking-widest">Fermer</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
