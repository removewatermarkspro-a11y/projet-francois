import React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#FDFBF7] py-12 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-serif text-xl font-bold mb-2">Nuage Massage<span className="text-[#8F4626]">.</span></h3>
                    <p className="text-sm text-gray-500 mb-2 font-medium">Masseur Professionnel & Bien-être</p>
                    <a href="tel:0699420464" className="text-sm font-sans font-bold text-[#8F4626] hover:underline">06 99 42 04 64</a>
                </div>

                <div className="flex gap-6 text-sm text-gray-600 font-medium">
                    <Link href="/services" className="hover:text-[#8F4626]">Services</Link>
                    <Link href="/about" className="hover:text-[#8F4626]">À Propos</Link>
                    <Link href="/contact" className="hover:text-[#8F4626]">Contact</Link>
                </div>

                <div className="text-xs text-gray-400">
                    © {new Date().getFullYear()} Nuage Massage. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
