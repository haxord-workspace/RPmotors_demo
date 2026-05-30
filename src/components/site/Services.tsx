import { Car, Tag, Banknote, ShieldCheck, FileText, Search } from "lucide-react";

const services = [
  { icon: Car, title: "Buy Premium Used Cars", text: "Curated, certified pre-owned cars across top brands." },
  { icon: Tag, title: "Sell Your Car", text: "Best market value with instant quotes and quick settlement." },
  { icon: Banknote, title: "Vehicle Finance", text: "Tailored finance options from leading banks & NBFCs." },
  { icon: ShieldCheck, title: "Insurance Support", text: "End-to-end insurance assistance for total peace of mind." },
  { icon: FileText, title: "RC Transfer", text: "Seamless ownership transfer handled by our experts." },
  { icon: Search, title: "Vehicle Inspection", text: "200-point inspection to guarantee quality & safety." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between max-w-2xl mb-10 sm:mb-16 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">What We Offer</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              End-to-end automotive <span className="text-gradient-gold">services</span>
            </h2>
          </div>
          <div className="sm:hidden flex items-center gap-2 text-xs text-muted-foreground font-medium animate-pulse">
            Swipe to explore <span className="text-gold text-lg leading-none">→</span>
          </div>
        </div>

        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 pt-2 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {services.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="group relative p-8 rounded-2xl glass hover-lift overflow-hidden min-w-[85vw] sm:min-w-0 shrink-0 snap-center"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "var(--gradient-radial-gold)" }} />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-gold-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
                <div className="mt-6 text-xs uppercase tracking-widest text-gold/70">0{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
