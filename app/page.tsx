import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Methodology from "@/components/Methodology";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Process />
        <Methodology />
        <Cases />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
