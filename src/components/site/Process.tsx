import { Search, ClipboardCheck, Wrench, Tag, Car, Key } from "lucide-react";

const steps = [
  { icon: Search, title: "Vehicle Sourcing", text: "Hand-picking the finest pre-owned cars from trusted owners." },
  { icon: ClipboardCheck, title: "Inspection & Quality Check", text: "200+ point quality and safety verification." },
  { icon: Wrench, title: "Reconditioning", text: "Mechanical, cosmetic and detailing refinement." },
  { icon: Tag, title: "Pricing & Listing", text: "Transparent, fair market-driven pricing." },
  { icon: Car, title: "Customer Test Drive", text: "Experience the car before you commit." },
  { icon: Key, title: "Delivery & Documentation", text: "Hassle-free paperwork and on-time handover." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Process</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            From sourcing to <span className="text-gradient-gold">your driveway</span>
          </h2>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-24 h-24 rounded-full bg-background border border-gold/30 flex items-center justify-center mb-5 group hover:bg-gradient-gold transition-all duration-500">
                    <Icon className="w-8 h-8 text-gold group-hover:text-gold-foreground transition-colors" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-gold text-gold-foreground text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold mb-2">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Auto-Scrolling Marquee */}
          <div className="flex md:hidden overflow-hidden relative -mx-6 py-4 mask-edges">
            <div className="flex animate-marquee">
              <div className="flex shrink-0 gap-8 px-4">
                {steps.map(({ icon: Icon, title, text }, i) => (
                  <div key={title} className="relative w-[280px] shrink-0">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 w-24 h-24 rounded-full bg-background border border-gold/30 flex items-center justify-center mb-5 group hover:bg-gradient-gold transition-all duration-500">
                        <Icon className="w-8 h-8 text-gold group-hover:text-gold-foreground transition-colors" />
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-gold text-gold-foreground text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold mb-2">{title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed px-4">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 gap-8 px-4">
                {steps.map(({ icon: Icon, title, text }, i) => (
                  <div key={`${title}-dup`} className="relative w-[280px] shrink-0">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 w-24 h-24 rounded-full bg-background border border-gold/30 flex items-center justify-center mb-5 group hover:bg-gradient-gold transition-all duration-500">
                        <Icon className="w-8 h-8 text-gold group-hover:text-gold-foreground transition-colors" />
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-gold text-gold-foreground text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold mb-2">{title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed px-4">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
