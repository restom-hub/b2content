import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Automation from "@/components/Automation";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Methodology from "@/components/Methodology";
import Cases from "@/components/Cases";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Automation />
        <Results />
        <Process />
        <Methodology />
        <Cases />
        <Partners />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
