import Navbar from "./_components/layout/Navbar";
import Footer from "./_components/layout/Footer";
import Hero from "./_components/sections/Hero";
import Marquee from "./_components/sections/Marquee";
import About from "./_components/sections/About";
import Classes from "./_components/sections/Classes";
import Schedule from "./_components/sections/Schedule";
import Trainers from "./_components/sections/Trainers";
import Gallery from "./_components/sections/Gallery";
import Testimonials from "./_components/sections/Testimonials";
import Pricing from "./_components/sections/Pricing";
import FAQ from "./_components/sections/FAQ";
import ScrollReveal from "./_components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollReveal><Marquee /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Classes /></ScrollReveal>
      <ScrollReveal><Schedule /></ScrollReveal>
      <ScrollReveal><Trainers /></ScrollReveal>
      <ScrollReveal><Gallery /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><Pricing /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <Footer />
    </main>
  );
}
