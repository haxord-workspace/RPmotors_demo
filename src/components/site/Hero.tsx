import { useEffect, useState } from "react";
import heroCar from "@/assets/hero-car.jpg";
import { ArrowRight, Phone, Users, Car, Award } from "lucide-react";

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOut expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black text-white pt-16 lg:pt-24"
      style={{
        backgroundImage: `url(${heroCar})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0%,transparent_35%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-white/80 mb-8">
            Premium Pre-Owned · Wandoor, Kerala
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Find your <span className="text-primary">perfect car</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-display font-light text-base lg:text-[28px] text-[#F8F8F8]/70 uppercase tracking-wide leading-relaxed">
            Best deals on premium used cars in Kerala
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#cars"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white shadow-gold-glow transition-transform hover:scale-[1.03]"
            >
              Explore Cars
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-4">
            {[
              { icon: Users, end: 2500, suffix: "+", label: "Trusted Customers" },
              { icon: Car, end: 150, suffix: "+", label: "Premium Vehicles" },
              { icon: Award, end: 12, suffix: "+", label: "Years of Experience" },
            ].map(({ icon: Icon, end, suffix, label }) => (
              <div key={label} className="glass-strong rounded-2xl sm:rounded-3xl border border-white/10 p-3 sm:p-6 text-center backdrop-blur-xl flex flex-col items-center justify-center">
                <Icon className="mx-auto mb-2 sm:mb-3 w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                <div className="font-display text-base sm:text-2xl md:text-3xl font-bold text-white">
                  <CountUp end={end} suffix={suffix} />
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-white/70 mt-1 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
