import { SiBmw, SiAudi, SiToyota, SiMahindra, SiHyundai, SiKia, SiHonda, SiTata, SiVolkswagen } from "react-icons/si";

const MercedesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25zm-.635 1.7v8.087L4.475 7.02l.635 1.096L11.365 14.4l-6.89 4.02-.635-1.096 6.89-4.02L12 14.5l1.27-.8-.635-1.1v-8.1H11.365z" />
  </svg>
);

const brandIcons = [
  { name: "BMW", Icon: SiBmw },
  { name: "Mercedes-Benz", Icon: MercedesIcon },
  { name: "Audi", Icon: SiAudi },
  { name: "Toyota", Icon: SiToyota },
  { name: "Mahindra", Icon: SiMahindra },
  { name: "Hyundai", Icon: SiHyundai },
  { name: "Kia", Icon: SiKia },
  { name: "Honda", Icon: SiHonda },
  { name: "Tata", Icon: SiTata },
  { name: "Volkswagen", Icon: SiVolkswagen }
];

export function Brands() {
  const list = [...brandIcons, ...brandIcons];
  return (
    <section className="py-20 border-y border-border/50 overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-12 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Featured Brands</div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold">
          Brands you trust, vetted by experts
        </h3>
      </div>

      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-20 items-center animate-marquee whitespace-nowrap min-w-max px-10">
          {list.map(({ name, Icon }, i) => (
            <div
              key={`${name}-${i}`}
              className="text-muted-foreground/30 hover:text-gold transition-all duration-300 hover:scale-110 shrink-0 flex items-center justify-center cursor-help"
              title={name}
            >
              <Icon className="w-14 h-14 md:w-20 md:h-20 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
