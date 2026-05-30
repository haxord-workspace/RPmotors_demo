import { ArrowRight } from "lucide-react";
import car1 from "@/assets/delivery-1.jpg";
import car2 from "@/assets/delivery-2.jpg";
import car3 from "@/assets/delivery-3.jpg";
import car4 from "@/assets/delivery-4.jpg";
import car5 from "@/assets/delivery-5.jpg";

const deliveryPhotos = [
  {
    img: car1,
    title: "Delivered in style",
    label: "Happy Family",
    customer: "Mr. Ajay",
  },
  {
    img: car2,
    title: "Happy new owner",
    label: "Premium Handover",
    customer: "Mr. Arun",
  },
  {
    img: car3,
    title: "Premium handover",
    label: "Toyota Delivery",
    customer: "Mr. Singh",
  },
  {
    img: car4,
    title: "Ready to roll",
    label: "Family Delivery",
    customer: "Mr. Thomas",
  },
  {
    img: car5,
    title: "A Special Moment",
    label: "New Car Handover",
    customer: "Mr. Rahman",
  },
];

export function DeliveryPhotos() {
  return (
    <section id="delivery" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Customer Delivery Photos</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Real delivery moments with happy customers</h2>
          <p className="mt-4 text-muted-foreground">See our premium deliveries and customer handovers from RP Motors showroom.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {deliveryPhotos.map((photo) => (
            <div key={photo.label} className="group overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-elegant transition-transform hover:-translate-y-2">
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
                <img
                  src={photo.img}
                  alt={photo.label}
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/80">{photo.title}</div>
                  <div className="mt-2 text-lg font-semibold text-white">{photo.label}</div>
                  <div className="mt-1 text-xs text-white/60">Delivered to {photo.customer}</div>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-sm text-muted-foreground">Delivered with care and a premium handover experience.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View story <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
