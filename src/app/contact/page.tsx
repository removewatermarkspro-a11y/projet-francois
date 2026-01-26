import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Header />

            <Section className="bg-sage-50">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                        Contact & Accès
                    </h1>
                    <p className="text-lg text-gray-600">
                        Une question ? Un besoin particulier ? N&apos;hésitez pas à me contacter.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-8">
                            Informations Pratiques
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-sage-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Cabinet François Massage</h3>
                                    <p className="text-gray-600">12 Rue de la Paix<br />75002 Paris</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-sage-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Téléphone</h3>
                                    <p className="text-gray-600">+33 6 12 34 56 78</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-sage-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-600">contact@francois-massage.fr</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-sage-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Horaires</h3>
                                    <p className="text-gray-600">Lundi - Samedi : 09h00 - 20h00<br />Dimanche : Fermé</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-8 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                            Map Integration (Google Maps)
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-8">
                            Envoyer un message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="firstname" className="text-sm font-medium text-gray-700">Prénom</label>
                                    <input type="text" id="firstname" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-400" placeholder="Jean" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastname" className="text-sm font-medium text-gray-700">Nom</label>
                                    <input type="text" id="lastname" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-400" placeholder="Dupont" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-400" placeholder="jean.dupont@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-400" placeholder="Votre message..."></textarea>
                            </div>

                            <Button className="w-full text-lg py-3">Envoyer</Button>
                        </form>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
