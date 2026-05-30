import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border/60 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center font-display font-bold text-gold-foreground">RP</div>
              <div>
                <div className="font-display font-bold tracking-wide">RP MOTORS</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Wandoor</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kerala's trusted destination for premium pre-owned cars. Quality, transparency
              and customer-first service since 2012.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "About", "Services", "Inventory", "Process", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Buy Used Cars", "Sell Your Car", "Vehicle Finance", "Insurance", "RC Transfer", "Inspection"].map((l) => (
                <li key={l}><span className="hover:text-gold transition-colors cursor-default">{l}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5">Get in touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>RP Motors, Wandoor,<br />Malappuram, Kerala</li>
              <li><a href="tel:+919876543210" className="hover:text-gold">+91 98765 43210</a></li>
              <li><a href="mailto:hello@rpmotors.in" className="hover:text-gold">hello@rpmotors.in</a></li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gradient-gold hover:text-gold-foreground transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} RP Motors, Wandoor. All rights reserved.</p>
          <p>Crafted with passion for automotive excellence.</p>
        </div>
      </div>
    </footer>
  );
}
