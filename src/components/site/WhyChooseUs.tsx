import { useEffect, useRef, useState } from "react";
import { BadgeCheck, IndianRupee, Wrench, FileCheck2, HeadphonesIcon, Trophy } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "Certified Vehicles" },
  { icon: IndianRupee, title: "Transparent Pricing" },
  { icon: Wrench, title: "Multi-Point Inspection" },
  { icon: FileCheck2, title: "Easy Documentation" },
  { icon: HeadphonesIcon, title: "Customer Support" },
  { icon: Trophy, title: "Quality Assurance" },
];

const stats = [
  { value: 2500, suffix: "+", label: "Happy Customers" },
  { value: 150, suffix: "+", label: "Cars in Stock" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 12, suffix: "+", label: "Years of Service" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function WhyChooseUs() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Why Choose Us</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Built on trust. <br />
              <span className="text-gradient-gold">Driven by excellence.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Every car we deliver carries our promise — inspected, certified, and priced
              fairly so you make confident decisions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-3 p-4 rounded-xl glass hover-lift">
                  <Icon className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm font-medium">{title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-8 text-center hover-lift">
                <div className="font-display text-5xl font-bold text-gradient-gold">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
