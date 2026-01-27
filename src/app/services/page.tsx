"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles, Zap } from "lucide-react"; // Selected icons
import { BookingSection } from "@/components/home/BookingSection";

// Updated Service Categories
const serviceCategories = [
  {
    title: "Massage Musculaire",
    description: "Musculaire, récupération sportive, apaisement des tensions et nœuds, traitement des fascias, souplesse et libération articulaire, accompagnement sportif, drainage musculaire.",
    pricing: "75€ / 90€ / 105€",
    duration: "1h / 1h15 / 1h30",
    image: "/service-1.jpg", // Using existing images remapped
    icon: Zap
  },
  {
    title: "Massage Relaxant",
    description: "Relaxant, enveloppement, détente psychique et mentale, focus sur le lâcher prise et la restauration du capital fatigue, apaisement du stress et des angoisses.",
    pricing: "75€ / 90€ / 105€",
    duration: "1h / 1h15 / 1h30",
    image: "/service-2.jpg",
    icon: Heart
  },
  {
    title: "Massage Énergétique",
    description: "Énergétique, rééquilibrage énergétique, drainage des toxines, meilleure circulation sanguine et oxygénation du corps.",
    pricing: "75€ / 90€ / 105€",
    duration: "1h / 1h15 / 1h30",
    image: "/service-3.jpg",
    icon: Sparkles
  }
];

// Techniques List
const techniques = [
  "Californien", "Suédois", "Thaïlandais traditionnel", "Réflexologie plantaire",
  "Prénatal", "Deep tissu", "Abhyanga", "Drainage"
];

const pricings = [
  { duration: "1h", price: "75€" },
  { duration: "1h15", price: "90€" },
  { duration: "1h30", price: "105€" },
];

const packages = [
  { duration: "3h", price: "200€", unite: "67€/h" },
  { duration: "5h", price: "320€", unite: "64€/h" },
  { duration: "7h", price: "425€", unite: "61€/h" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20 bg-[#FDFBF7]">
      <Header />

      {/* Hero Section */}
      <Section className="bg-terre py-20 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-white/70 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Notre Carte
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Prestations Sur Mesure
          </h1>
          <p className="text-lg text-white/90 font-light font-sans max-w-xl mx-auto">
            Trois grands types de massage adaptés à vos besoins.
          </p>
        </div>
      </Section>

      {/* Techniques Note */}
      <Section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 font-sans text-sm uppercase tracking-widest mb-4">Sur la base des techniques suivantes</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#8F4626] font-serif text-xl">
            {techniques.map((tech, i) => (
              <span key={i} className="relative">
                {tech}
                {i < techniques.length - 1 && <span className="ml-6 text-gray-300">•</span>}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="grid md:grid-cols-3 gap-10">
          {serviceCategories.map((service, index) => (
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
                <h3 className="text-3xl font-serif text-[#2C2C2C] mb-4 group-hover:text-[#8F4626] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-8 font-sans text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto border-t border-gray-100 pt-6">
                  <div className="flex justify-between items-center text-[#2C2C2C] font-semibold font-sans mb-4">
                    <span>A partir de 75€</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-[#8F4626] hover:text-[#3E4B3D] p-0 hover:bg-transparent tracking-widest uppercase text-xs font-bold"
                      onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Réserver
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing & Logistics Section */}
      <Section className="bg-[#EBE9E4]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Standard Rates Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 transition-transform hover:scale-[1.01] duration-500">
              <h3 className="text-3xl font-serif text-[#8F4626] mb-8 font-bold">Tarifs à la séance</h3>
              <div className="space-y-6">
                {pricings.map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-xl text-[#2C2C2C] font-serif font-medium">{item.duration}</span>
                    <span className="text-3xl text-[#8F4626] font-bold">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-[#FDFBF7] rounded-xl border border-[#8F4626]/20">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#8F4626]/10 rounded-full text-[#8F4626]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C2C2C] mb-1 font-serif text-lg">Déplacement à domicile</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Je me déplace avec mon futon (ou sur votre table/tapis).
                      <br />
                      <span className="text-[#8F4626] font-bold mt-1 block text-base">+10 euros par déplacement.</span>
                      <span className="text-xs text-gray-400 mt-2 block">Je ne reçois plus à mon domicile pour le moment.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Packages Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 transition-transform hover:scale-[1.01] duration-500 flex flex-col">
              <h3 className="text-3xl font-serif text-[#8F4626] mb-4 font-bold">Forfaits</h3>
              <p className="text-gray-500 mb-8 italic text-sm border-l-4 border-[#D17A4A] pl-4 py-1 bg-gray-50 rounded-r-lg">
                Valables 6 mois, non nominatifs (partageables avec vos proches), et divisibles comme vous le souhaitez.
              </p>
              <div className="space-y-6 flex-grow">
                {packages.map((pkg, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4 group hover:bg-[#FDFBF7] transition-colors rounded-lg px-2 -mx-2">
                    <span className="text-xl text-[#2C2C2C] font-serif font-medium">{pkg.duration}</span>
                    <div className="text-right">
                      <span className="text-3xl text-[#8F4626] font-bold block group-hover:scale-110 transition-transform origin-right">{pkg.price}</span>
                      <span className="text-xs text-gray-400 font-medium">soit {pkg.unite}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reserve Button for Packages (Optional, just visual balance) */}
              <div className="mt-8 pt-6 text-center border-t border-gray-100">
                <p className="text-sm text-gray-400 mb-4">Envie de commencer un suivi régulier ?</p>
                <Button
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                  variant="primary"
                  className="w-full bg-terre"
                >
                  Réserver un forfait
                </Button>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Integrated Booking Section */}
      <BookingSection />

      <Footer />
    </main>
  );
}
