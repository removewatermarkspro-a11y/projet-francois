"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
    {
        text: "Un massage fait par les mains d'un expert. Respectueux et l'entretien préalable avant de commencer est une bonne touche pour savoir s'il y a des zones sur lesquelles il faudrait se concentrer et celles qu'il faut éviter. Forte recommandation",
        name: "Brandon Dellafave",
        stars: "5/5",
        date: "il y a 2 mois",
    },
    {
        text: "Une expérience fabuleuse que je recommandes à tous.tes ! François est à l'écoute à la fois de nos paroles (la session d'échange avant le massage est super et instaure de suite une relation de confiance), mais aussi de notre corps. Je suis sortie reconnectée et détendue ! Merci aussi pour les conseils. Je sens que cela va devenir un indispensable dans ma vie haha. Merci encore !",
        name: "ines OU",
        stars: "5/5",
        date: "il y a 5 mois",
    },
    {
        text: "François est un masseur exceptionnel ! Son salon de massage est une bulle de douceur dans laquelle on entre avec confiance et bienveillance. Très à l'écoute, gentil et souriant, François a pris le temps de me mettre à l'aise dès le début et de m'interroger sur mes besoins et mes envies afin d'adapter au mieux la séance. L'heure qui a suivi était fabuleuse et j'en suis ressortie plus détendue que jamais, sereine, profondément apaisée et alignée. Les mains de François sont un écrin de bien-être entre lesquelles je n'ai pas regretté de m'être abandonnée. Je recommande à 100% !",
        name: "Léa Schwartz",
        stars: "5/5",
        date: "il y a 9 mois",
    },
    {
        text: "C'était mon tout premier massage, et je ne pouvais pas mieux tomber ! François a su me mettre à l’aise dès le début et adapter le massage à mes besoins. Le résultat : une détente totale et un vrai soulagement des tensions. Je ne pensais pas que ça ferait autant de bien ! Une super expérience que je recommande à tout le monde.",
        name: "Bretillot Lucien",
        stars: "5/5",
        date: "Visité en mars 2025",
    },
    {
        text: "François est à l'écoute des besoins et attentes de ses clients. Il est en méditation pendant le massage que j'ai ressenti très profond et apaisant. Je sentais mon corps complètement fluide dès le lendemain, Merci ! Je recommande Nuage Massage en toute confiance",
        name: "Blandine COTE",
        stars: "5/5",
        date: "il y a 11 mois",
    },
    {
        text: "Je recommande Nuage massage les yeux fermés ! François est un excellent masseur, mais en plus de la technique il est aussi très apaisant, gentil et à l'écoute. Il prend le temps de personnaliser le massage en fonction de nos envies, de nos besoins et de notre état psychologique du moment. J'étais très impressionnée par la sensation de bien-être (physique et mentale) que j'ai ressenti en sortant, et qui reste durablement. Merci !",
        name: "Angèle Proust",
        stars: "5/5",
        date: "il y a un an",
    }
];

const row1 = [reviews[0], reviews[2], reviews[4]];
const row2 = [reviews[1], reviews[3], reviews[5]];

function ReviewCard({ text, name, date }: { text: string, name: string, date: string }) {
    return (
        <div className="bg-[#FAF9F6] p-6 rounded-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-[#EBE9E4] w-[350px] md:w-[450px] flex-shrink-0 mx-6 h-full flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
                <div className="flex text-[#C5A086] mb-4 justify-between items-center">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" className="mr-1 last:mr-0 opacity-80" />
                        ))}
                    </div>
                    <span className="text-xs text-gray-400 font-sans">{date}</span>
                </div>
                <p className="text-[#4A4A4A] font-sans font-medium leading-relaxed text-sm md:text-base">
                    "{text}"
                </p>
            </div>
            <div className="mt-6 pt-6 border-t border-[#EBE9E4] flex flex-col items-start">
                <span className="text-sm font-serif font-bold text-[#8F4626]">{name}</span>
                <span className="text-[10px] font-sans tracking-[0.2em] text-gray-400 uppercase mt-1">Avis Google</span>
            </div>
        </div>
    );
}

export function ReviewsSection() {
    return (
        <section className="py-24 bg-[#F9F9F9] overflow-hidden relative">
            {/* Gradient Fade from previous section (Booking - textured orange) */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#D17A4A] to-transparent pointer-events-none opacity-40" />

            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-4">
                    Vos mots doux
                </h2>
                <p className="text-gray-500 uppercase tracking-widest text-xs">
                    Témoignages de mes clients
                </p>
            </div>

            <div className="flex flex-col gap-12">
                {/* Row 1: Left to Right */}
                <div className="flex relative w-full overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    >
                        {[...row1, ...row1, ...row1, ...row1].map((review, i) => (
                            <ReviewCard key={`${i}-r1`} text={review.text} name={review.name} date={review.date} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex relative w-full overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 45, repeat: Infinity }}
                    >
                        {[...row2, ...row2, ...row2, ...row2].map((review, i) => (
                            <ReviewCard key={`${i}-r2`} text={review.text} name={review.name} date={review.date} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
