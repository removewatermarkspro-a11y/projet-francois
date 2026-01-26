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
        text: "Super expérience, surtout pour une novice du massage. Belle mise en confiance, approche très consciencieuse et professionnelle. François s’adapte de manière intuitive et assez impressionnante aux besoins et particularités !! Merci encore - je souffle enfin :) Et je recommande !!!",
        id: 6,
    }
];

const row1 = [reviews[0], reviews[2], reviews[4]];
const row2 = [reviews[1], reviews[3], reviews[5]];

function ReviewCard({ text }: { text: string }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-[400px] md:w-[500px] flex-shrink-0 mx-4 h-full flex flex-col justify-between">
            <div>
                <div className="flex text-[#D4AF37] mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" className="mr-1" />
                    ))}
                </div>
                <p className="text-gray-600 font-sans font-light leading-relaxed italic text-sm md:text-base">
                    "{text}"
                </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#EBE9E4] flex items-center justify-center text-[#5A6C58] font-bold text-xs mr-3">
                    C
                </div>
                <span className="text-sm font-medium text-gray-500">Client(e) Nuage Massage</span>
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
