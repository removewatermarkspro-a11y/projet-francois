import { Hero } from "@/components/home/Hero";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { Philosophy } from "@/components/home/Philosophy";
import { BookingSection } from "@/components/home/BookingSection";
import { TranquilitySection } from "@/components/home/TranquilitySection";
import { SpecialistSection } from "@/components/home/SpecialistSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TranquilitySection /> {/* New Section 1: Floating Bubbles */}
      <FeaturedServices />
      <SpecialistSection /> {/* New Section 2: Split Layout */}
      <BookingSection />
      <Footer />
    </main>
  );
}
