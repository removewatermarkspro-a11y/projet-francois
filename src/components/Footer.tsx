import React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-sage-50 py-12 border-t border-sage-100">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-serif text-xl font-bold mb-2">François<span className="text-sage-400">.</span></h3>
                    <p className="text-sm text-gray-500">Masseur Professionnel & Bien-être</p>
                </div>

                <div className="flex gap-6 text-sm text-gray-600">
                    <Link href="/services" className="hover:text-sage-500">Services</Link>
                    <Link href="/about" className="hover:text-sage-500">À Propos</Link>
                    <Link href="/contact" className="hover:text-sage-500">Contact</Link>
                </div>

                <div className="text-xs text-gray-400">
                    © {new Date().getFullYear()} François Massage. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
