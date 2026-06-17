import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { Brands } from "@/components/site/Brands";
import { Cars } from "@/components/site/Cars";
import { Testimonials } from "@/components/site/Testimonials";
import { DeliveryPhotos } from "@/components/site/DeliveryPhotos";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export function Index() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly for render cycles and Lenis initialization
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Brands />
        <Cars />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <DeliveryPhotos />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
