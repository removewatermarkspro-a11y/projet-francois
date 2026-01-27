"use client";

import React from "react";
import { InlineWidget } from "react-calendly";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function BookingSection() {
    return (
        <Section id="booking" className="bg-terre py-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-white/70 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
                    Rendez-vous
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                    Réservez votre instant
                </h2>
                <p className="text-white/80 font-sans font-light">
                    Un moment rien que pour vous.
                </p>
            </div>

            {/* 
         Removed the white background container (bg-white rounded-2xl).
         Now the Calendly widget sits directly on the page, or transparently.
         Calendly iframe background is usually white. 
         If user wants NO margin, we set the container to overflow hidden and no padding.
      */}
            <div className="w-full max-w-5xl mx-auto h-[750px] relative overflow-hidden">
                <InlineWidget
                    url="https://calendly.com/nuagemassage1/30min"
                    styles={{
                        height: '750px',
                        width: '100%',
                        margin: '0',
                        padding: '0'
                    }}
                    pageSettings={{
                        backgroundColor: 'ffffff', // White background card
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: '8F4626', // Earth buttons
                        textColor: '2C2C2C'     // Dark text
                    }}
                />
            </div>
        </Section>
    );
}
