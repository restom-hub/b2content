import Nav from "@/components/contta/Nav";
import Reveal from "@/components/contta/Reveal";
import Hero from "@/components/contta/Hero";
import Integrations from "@/components/contta/Integrations";
import Features from "@/components/contta/Features";
import HowItWorks from "@/components/contta/HowItWorks";
import Results from "@/components/contta/Results";
import CTA from "@/components/contta/CTA";
import Footer from "@/components/contta/Footer";

export default function ConttaAIPage() {
  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <Hero />
        <Integrations />
        <Features />
        <HowItWorks />
        <Results />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
