import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Heart } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useWishlist } from "@/hooks/useWishlist";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#cars", label: "Inventory" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 shadow-xl" : "bg-black/95"}`}
    >
      <div className="border-b border-white/10 bg-black/95">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between gap-4">
          <div className="hidden md:flex flex-1 items-center justify-start gap-5 text-xs text-foreground/80">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <span className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-foreground/70">
                <Phone className="w-3 h-3" />
              </span>
              +91 98765 43210
            </a>
            <a
              href="mailto:hello@rpmotors.in"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <span className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-foreground/70">
                <Mail className="w-3.5 h-3.5" />
              </span>
              hello@rpmotors.in
            </a>
          </div>

          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex-1 flex justify-start md:justify-center items-center gap-2.5 text-white"
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-xs font-bold shadow-gold-glow">
              R
            </div>
            <div className="leading-tight">
              <div className="font-display text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]">
                RP Motors
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-foreground/70">
                Trust & Value
              </div>
            </div>
          </Link>

          <div className="flex-1 flex items-center justify-end gap-4">
            {/* Wishlist Icon with count badge */}
            <Link
              to="/wishlist"
              className="relative p-2.5 rounded-full border border-white/10 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 flex items-center justify-center bg-white/5"
              aria-label="Wishlist"
            >
              <Heart className={`w-4 h-4 ${count > 0 ? "fill-primary text-primary" : ""}`} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[9px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center shadow-lg animate-pulse border border-black">
                  {count}
                </span>
              )}
            </Link>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white shadow-gold-glow transition-transform hover:scale-105"
            >
              Request a Quote
            </a>

            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 text-foreground"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-[#070707] border-b border-white/10">
        <nav className="container mx-auto px-6 py-3 flex items-center justify-center gap-10 text-sm font-medium text-foreground/70">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="relative transition-colors duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/rto"
            className="relative transition-colors duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            RTO
          </Link>
        </nav>
      </div>

      <div className="border-b border-white/10 bg-primary/5 overflow-hidden py-1.5 flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex shrink-0 justify-around min-w-full gap-8 px-4 text-[10px] sm:text-xs font-medium text-primary uppercase tracking-widest">
            <span>Special Offer: Get up to 10% off on premium sedans</span>
            <span>•</span>
            <span>24/7 Support Available</span>
            <span>•</span>
            <span>Test Drive Available</span>
            <span>•</span>
            <span>Trusted by 2500+ Customers</span>
            <span>•</span>
            <span>Visit RP Motors Today!</span>
            <span>•</span>
          </div>
          <div className="flex shrink-0 justify-around min-w-full gap-8 px-4 text-[10px] sm:text-xs font-medium text-primary uppercase tracking-widest">
            <span>Special Offer: Get up to 10% off on premium sedans</span>
            <span>•</span>
            <span>24/7 Support Available</span>
            <span>•</span>
            <span>Test Drive Available</span>
            <span>•</span>
            <span>Trusted by 2500+ Customers</span>
            <span>•</span>
            <span>Visit RP Motors Today!</span>
            <span>•</span>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-strong mt-2 mx-4 rounded-3xl p-6 border border-white/10">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  setOpen(false);
                  handleNavClick(e, l.href);
                }}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/rto"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>RTO Directory</span>
            </Link>
            <Link
              to="/wishlist"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>My Wishlist</span>
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {count} {count === 1 ? "Item" : "Items"}
              </span>
            </Link>
            <a
              href="#contact"
              onClick={(e) => {
                setOpen(false);
                handleNavClick(e, "#contact");
              }}
              className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm shadow-gold-glow"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
