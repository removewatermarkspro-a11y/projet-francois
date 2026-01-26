"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Zap, Waves, Feather, Heart, Cloud } from "lucide-react";
import { BookingSection } from "@/components/home/BookingSection";

// Updated data with imported images
const allServices = [
  {
    title: "Massage Suédois",
    description: "Le grand classique. Une détente musculaire profonde pour évacuer le stress et les tensions du quotidien.",
    benefits: ["Relâchement musculaire", "Amélioration de la circulation", "Réduction du stress"],
    price: "80€",
    duration: "60 min",
    icon: Sparkles,
    image: "/service-1.jpg"
  },
  {
    title: "Deep Tissue",
    description: "Idéal pour les sportifs ou les tensions chroniques. Ce soin cible les couches profondes des muscles et fascias.",
    benefits: ["Récupération sportive", "Dénouement des tensions", "Mobilité accrue"],
    price: "90€",
    duration: "60 min",
    icon: Zap,
    image: "/service-2.jpg"
  },
  {
    title: "Lomi Lomi",
    description: "Un massage hawaïen fluide et rythmé, utilisant les avant-bras pour un effet cocon enveloppant.",
    benefits: ["Harmonie corps-esprit", "Circulation énergétique", "Sensation d'enveloppement"],
    price: "85€",
    duration: "60 min",
    icon: Waves,
    image: "/service-3.jpg"
  },
  {
    title: "Massage Californien",
    description: "Doux et enveloppant, il privilégie les grands mouvements lents pour une relaxation psychocorporelle.",
    benefits: ["Apaisement nerveux", "Prise de conscience corporelle", "Douceur extrême"],
    price: "80€",
    duration: "60 min",
    icon: Feather,
    image: "/service-4.jpg"
  },
  {
    title: "Réflexologie Plantaire",
    description: "Stimulation des zones réflexes des pieds pour rétablir l'équilibre énergétique de tout le corps.",
    benefits: ["Détoxification", "Relaxation profonde", "Revitalisation"],
    price: "60€",
    duration: "45 min",
    icon: Cloud,
    image: "/service-5.jpg"
  },
  {
    title: "Massage Duo",
    description: "Partagez un moment de complicité et de détente à deux. Le même soin de qualité, ensemble.",
    benefits: ["Moment partagé", "Complicité", "Détente simultanée"],
    price: "150€",
    duration: "60 min",
    icon: Heart,
    image: "/service-6.jpg"
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 bg-[#FDFBF7]">
      <Header />

      <Section className="bg-[#5A6C58] py-20 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-white/70 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Notre Carte
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            La Carte des Soins
          </h1>
          <p className="text-lg text-white/90 font-light font-sans max-w-xl mx-auto">
            Découvrez une gamme complète de massages conçus pour répondre à vos besoins spécifiques.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-serif text-[#2C2C2C] group-hover:text-[#5A6C58] transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 font-sans text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="mb-6 border-t border-gray-100 pt-4">
                  <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">Bénéfices</h4>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#5A6C58] rounded-full" /> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4">
                  <div className="flex gap-4 text-[#2C2C2C] font-semibold font-sans">
                    <span>{service.price}</span>
                    <span className="text-gray-400 font-normal">|</span>
                    <span>{service.duration}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-[#5A6C58] hover:text-[#3E4B3D] p-0 hover:bg-transparent tracking-widest uppercase text-xs font-bold"
                    onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Réserver
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Integrated Booking Section */}
      <BookingSection />

      <Footer />
    </main>
  );
}
