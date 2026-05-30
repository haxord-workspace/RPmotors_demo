import { Phone, MessageCircle } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
          <div className="absolute inset-0 opacity-40"
            style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Looking for your <br className="md:hidden" />
              <span className="text-gradient-gold">perfect car?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              Talk to our specialists today and we'll help you drive home in a car you love.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold-glow hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="https://wa.me/919876543210" className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-foreground font-semibold hover:bg-surface-elevated transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
