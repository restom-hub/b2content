import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Automation from "@/components/Automation";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Automation />
        <Results />
        <Process />
        <Cases />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
