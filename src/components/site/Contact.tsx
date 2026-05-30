import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      setStatus("error");
      return;
    }
    setError(null);
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Visit Us</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Drop by our <span className="text-gradient-gold">showroom</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="glass rounded-2xl overflow-hidden">
              <iframe
                title="RP Motors location"
                src="https://www.google.com/maps?q=Wandoor,Malappuram,Kerala&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, title: "Address", text: "RP Motors, Wandoor,\nMalappuram, Kerala" },
                { icon: Phone, title: "Phone", text: "+91 98765 43210" },
                { icon: Mail, title: "Email", text: "hello@rpmotors.in" },
                { icon: Clock, title: "Hours", text: "Mon – Sun · 9 AM to 8 PM" },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="glass rounded-2xl p-5 hover-lift">
                  <Icon className="w-5 h-5 text-gold mb-3" />
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{title}</div>
                  <div className="text-sm whitespace-pre-line text-foreground">{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="glass rounded-2xl p-8 space-y-5">
            <h3 className="font-display text-2xl font-semibold">Send us an enquiry</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" placeholder="Full name" maxLength={100}
                className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors" />
              <input name="phone" placeholder="Phone" maxLength={20}
                className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors" />
            </div>
            <input name="email" type="email" placeholder="Email" maxLength={255}
              className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors" />
            <textarea name="message" placeholder="Tell us which car you're looking for…" rows={5} maxLength={1000}
              className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3.5 text-sm outline-none focus:border-gold transition-colors resize-none" />

            {status === "error" && <p className="text-sm text-destructive">{error}</p>}
            {status === "success" && <p className="text-sm text-gold">Thanks! We'll get back to you shortly.</p>}

            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-gold text-gold-foreground font-semibold shadow-gold-glow hover:scale-[1.02] transition-transform">
              <Send className="w-4 h-4" /> Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
