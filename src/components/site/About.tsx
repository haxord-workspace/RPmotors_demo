import showroom from "@/assets/showroom.jpg";
import { ShieldCheck, Heart, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={showroom}
              alt="RP Motors premium showroom"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-8 glass-strong rounded-2xl p-6 max-w-[260px] shadow-gold-glow">
            <div className="font-display text-4xl font-bold text-gradient-gold">12+</div>
            <div className="text-sm text-muted-foreground mt-1">Years of trust building Kerala's finest pre-owned car experience</div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">About RP Motors</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            A passion for cars. <br />
            <span className="text-gradient-gold">A promise of trust.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            RP Motors was built with a passion for delivering quality pre-owned vehicles
            and a hassle-free buying experience for customers across Kerala. From the heart
            of Wandoor, we curate every car with obsessive attention to detail — so you drive
            home confident in every kilometre ahead.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: ShieldCheck, title: "Trust & Transparency", text: "Verified history, honest pricing, and zero hidden surprises on every vehicle." },
              { icon: Heart, title: "Passion for Automobiles", text: "Hand-picked by enthusiasts who treat every car like their own." },
              { icon: Sparkles, title: "Customer-First Experience", text: "From first visit to lifetime support — we make ownership effortless." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">{title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
