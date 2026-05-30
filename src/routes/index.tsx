import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RP Motors Wandoor — Premium Pre-Owned Cars in Kerala" },
      { name: "description", content: "RP Motors, Wandoor — Kerala's trusted premium used car dealership. Certified vehicles, transparent pricing, finance & RC transfer support." },
      { property: "og:title", content: "RP Motors Wandoor — Premium Pre-Owned Cars in Kerala" },
      { property: "og:description", content: "Certified premium pre-owned cars from RP Motors, Wandoor — Malappuram, Kerala." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
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
