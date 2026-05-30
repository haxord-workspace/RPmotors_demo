import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ananthu Krishnan", role: "Calicut", rating: 5, text: "Bought my BMW from RP Motors. The transparency and after-sale support were unmatched. Felt like buying from a true luxury dealer." },
  { name: "Fathima Riyaz", role: "Malappuram", rating: 5, text: "From inspection to documentation, every step was effortless. The team made sure my Fortuner was delivered in showroom condition." },
  { name: "Vishnu Menon", role: "Kochi", rating: 5, text: "Genuine pricing, no hidden charges and a beautiful showroom experience. RP Motors has truly raised the bar in Kerala." },
];

export function Testimonials() {
  return (
    <section className="relative py-28 bg-surface overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-radial-gold)" }} />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Testimonials</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Trusted by drivers <span className="text-gradient-gold">across Kerala</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="glass rounded-2xl p-8 hover-lift relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-6 border-t border-border/60">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-gold-foreground font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
