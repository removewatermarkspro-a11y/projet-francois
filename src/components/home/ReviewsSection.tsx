"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
    {
        text: "Une expérience fabuleuse que je recommandes à tous.tes ! François est à l'écoute à la fois de nos paroles (la session d'échange avant le massage est super et instaure de suite une relation de confiance), mais aussi de notre corps. Je suis sortie reconnectée et détendue ! Merci aussi pour les conseils. Je sens que cela va devenir un indispensable dans ma vie haha.",
        id: 1,
    },
    {
        text: "Un massage fait par les mains d'un expert. Respectueux et l'entretien préalable avant de commencer est une bonne touche pour savoir s'il y a des zones sur lesquelles il faudrait se concentrer et celles qu'il faut éviter. Forte recommandation",
        id: 2,
    },
    {
        text: "François est un masseur exceptionnel ! Son salon de massage est une bulle de douceur dans laquelle on entre avec confiance et bienveillance. Très à l'écoute, gentil et souriant, François a pris le temps de me mettre à l'aise dès le début et de m'interroger sur mes besoins et mes envies afin d'adapter au mieux la séance. L'heure qui a suivi était fabuleuse et j'en suis ressortie plus détendue que jamais, sereine, profondément apaisée et alignée. Les mains de François sont un écrin de bien-être entre lesquelles je n'ai pas regretté de m'être abandonnée. Je recommande à 100% !",
        id: 3,
    },
    {
        text: "C'était mon tout premier massage, et je ne pouvais pas mieux tomber ! François a su me mettre à l’aise dès le début et adapter le massage à mes besoins. Le résultat : une détente totale et un vrai soulagement des tensions. Je ne pensais pas que ça ferait autant de bien ! Une super expérience que je recommande à tout le monde.",
        id: 4,
    },
    {
        text: "François est à l'écoute des besoins et attentes de ses clients. Il est en méditation pendant le massage que j'ai ressenti très profond et apaisant. Je sentais mon corps complètement fluide dès le lendemain, Merci ! Je recommande Nuage Massage en toute confiance.",
        id: 5,
    },
    {
        text: "Je recommande Nuage massage les yeux fermés ! François est un excellent masseur, mais en plus de la technique il est aussi très apaisant, gentil et à l'écoute. Il prend le temps de personnaliser le massage en fonction de nos envies, de nos besoins et de notre état psychologique du moment. J'étais très impressionnée par la sensation de bien-être (physique et mentale) que j'ai ressenti en sortant, et qui reste durablement. Merci !",
        id: 6,
    }
];

const row1 = [reviews[0], reviews[2], reviews[4]];
const row2 = [reviews[1], reviews[3], reviews[5]];

function ReviewCard({ text }: { text: string }) {
    return (
        <div className="bg-[#FAF9F6] p-10 rounded-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-[#EBE9E4] w-[450px] md:w-[600px] flex-shrink-0 mx-6 h-full flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
                <div className="flex text-[#C5A086] mb-6 justify-center">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className="mr-1 last:mr-0 opacity-80" />
                    ))}
                </div>
                <p className="text-[#4A4A4A] font-serif font-light leading-loose text-center text-lg md:text-xl italic">
                    "{text}"
                </p>
            </div>
            <div className="mt-8 pt-8 border-t border-[#EBE9E4] flex flex-col items-center">
                <span className="text-xs font-sans tracking-[0.2em] text-[#8F4626] uppercase mb-1">Nuage Massage</span>
                <span className="text-sm font-medium text-gray-400">Client(e) Vérifié(e)</span>
            </div>
        </div>
    );
}

export function ReviewsSection() {
    return (
        <section className="py-24 bg-[#F9F9F9] overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-4">
                    Vos mots doux
                </h2>
                <p className="text-gray-500 uppercase tracking-widest text-xs">
                    Témoignages de nos clients
                </p>
            </div>

            <div className="flex flex-col gap-12">
                {/* Row 1: Left to Right (Traditionally marquee moves content left, so 'animate x' negative. 
                    User asked 'defilent de gauche a droite' -> content moves TO the right? 
                    Or starts FROM left? 
                    Usually 'scrolling left to right' means text moves -> . 
                    Let's assume text moves -> (translate X positive).
                */}
                <div className="flex relative w-full overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    >
                        {[...row1, ...row1, ...row1, ...row1].map((review, i) => (
                            <ReviewCard key={`${review.id}-${i}`} text={review.text} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left (Text moves <- ) */}
                <div className="flex relative w-full overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 45, repeat: Infinity }}
                    >
                        {[...row2, ...row2, ...row2, ...row2].map((review, i) => (
                            <ReviewCard key={`${review.id}-${i}`} text={review.text} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
