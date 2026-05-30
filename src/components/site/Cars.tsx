import { useState } from "react";
import { Fuel, Gauge, Calendar, ArrowRight } from "lucide-react";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

const cars = [
  { img: car1, name: "BMW 5 Series", brand: "BMW", year: 2021, fuel: "Petrol", trans: "Automatic", price: "₹ 38.5 L", tag: "Sedan" },
  { img: car2, name: "Mercedes-Benz GLS", brand: "Benz", year: 2022, fuel: "Diesel", trans: "Automatic", price: "₹ 72.0 L", tag: "SUV" },
  { img: car3, name: "Audi A4 Premium", brand: "Audi", year: 2020, fuel: "Petrol", trans: "Automatic", price: "₹ 32.0 L", tag: "Sedan" },
  { img: car4, name: "Toyota Fortuner", brand: "Toyota", year: 2022, fuel: "Diesel", trans: "Automatic", price: "₹ 36.5 L", tag: "SUV" },
  { img: car5, name: "Hyundai Tucson", brand: "Hyundai", year: 2023, fuel: "Petrol", trans: "Automatic", price: "₹ 24.0 L", tag: "SUV" },
  { img: car6, name: "Kia Seltos GTX+", brand: "Kia", year: 2023, fuel: "Petrol", trans: "Manual", price: "₹ 16.5 L", tag: "SUV" },
];

const filters = ["All", "BMW", "Benz", "Audi", "Toyota", "Hyundai", "Kia"];

export function Cars() {
  const [filter, setFilter] = useState("All");
  const list = cars.filter((c) => filter === "All" || c.brand === filter);

  return (
    <section id="cars" className="relative py-28">
      <div className="container mx-auto px-6">
<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Featured Inventory</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Find your <span className="text-gradient-gold">perfect drive</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-gradient-gold text-gold-foreground shadow-gold-glow"
                    : "glass text-foreground hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((c) => (
            <article key={c.name} className="group glass rounded-2xl overflow-hidden hover-lift">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={1024}
                  height={704}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-strong text-xs font-semibold text-foreground">
                  {c.brand}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-strong text-xs font-semibold text-gold">
                  {c.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-xl font-semibold leading-tight">{c.name}</h3>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Price</div>
                    <div className="font-display font-bold text-gold">{c.price}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-border/60 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-gold" />{c.year}</div>
                  <div className="flex items-center gap-1.5"><Fuel className="w-3.5 h-3.5 text-gold" />{c.fuel}</div>
                  <div className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-gold" />{c.trans}</div>
                </div>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-gold transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
