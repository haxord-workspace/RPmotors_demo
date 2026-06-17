import { useState } from "react";
import { Fuel, Gauge, Calendar, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { cars } from "@/data/cars";
import { useWishlist } from "@/hooks/useWishlist";
import { FullscreenImageViewer } from "./FullscreenImageViewer";

const filters = ["All", "BMW", "Benz", "Audi", "Toyota", "Hyundai", "Kia"];

export function Cars() {
  const [filter, setFilter] = useState("All");
  const { has, add, remove } = useWishlist();
  const list = cars.filter((c) => filter === "All" || c.brand === filter);

  // Fullscreen image viewer state
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImages, setViewerImages] = useState<string[]>([]);
  const [viewerInitialIndex, setViewerInitialIndex] = useState(0);

  const openImageViewer = (images: string[], index: number) => {
    setViewerImages(images);
    setViewerInitialIndex(index);
    setViewerOpen(true);
  };

  return (
    <section id="cars" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Featured Inventory
            </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((c) => {
            const isFav = has(c.id);
            return (
              <article
                key={c.id}
                className="group bg-[#151822] border border-white/5 hover:border-primary/20 rounded-[12px] overflow-hidden hover-lift flex flex-row h-[120px] md:h-[140px] lg:h-[160px] relative shadow-md"
              >
                {/* Left side: Vehicle Image */}
                <div
                  className="relative w-1/3 md:w-2/5 shrink-0 bg-surface-elevated overflow-hidden border-r border-white/5 cursor-pointer"
                  onClick={() => openImageViewer(c.images, 0)}
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-l-[12px]"
                  />
                  {/* Floating Wishlist Icon on Top-Right of image */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (isFav) {
                        remove(c.id);
                      } else {
                        add(c);
                      }
                    }}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-[#E53935] hover:scale-105 text-white transition-all cursor-pointer z-10 shadow-md border border-white/10"
                    aria-label={isFav ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className={`w-3 h-3 transition-colors duration-300 ${
                        isFav ? "fill-[#E53935] text-[#E53935]" : "text-white"
                      }`}
                    />
                  </button>
                </div>

                {/* Right side: Info */}
                <div className="p-3 md:p-4 flex flex-col justify-between flex-1 min-w-0">
                  <div className="min-w-0">
                    {/* Brand & Tag badges */}
                    <div className="flex items-center gap-1.5 mb-0.5 md:mb-1">
                      <span className="text-[9px] font-bold text-[#E53935] uppercase tracking-wider">
                        {c.brand}
                      </span>
                      <span className="text-white/25 text-[9px]">•</span>
                      <span className="text-[#B0B0B0] text-[9px] uppercase tracking-wider font-semibold">
                        {c.tag}
                      </span>
                    </div>

                    {/* Vehicle Name */}
                    <h3 className="font-display font-bold text-xs md:text-sm lg:text-base text-white truncate group-hover:text-primary transition-colors leading-snug">
                      {c.name}
                    </h3>

                    {/* Selling Price */}
                    <div className="font-display font-extrabold text-xs md:text-sm lg:text-base text-gold mt-0.5">
                      {c.price}
                    </div>

                    {/* Fuel Type • Year • Transmission */}
                    <div className="flex items-center gap-1 text-[9px] md:text-xs text-[#B0B0B0] mt-0.5 md:mt-1 truncate font-medium">
                      <span>{c.fuel}</span>
                      <span className="text-white/10">•</span>
                      <span>{c.year}</span>
                      <span className="text-white/10">•</span>
                      <span>{c.trans}</span>
                    </div>

                    {/* KM Driven */}
                    <div className="text-[9px] md:text-xs text-[#B0B0B0] mt-0.5 font-medium">
                      {c.kmDriven} Driven
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-2 mt-2 border-t border-white/5 pt-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (isFav) {
                          remove(c.id);
                        } else {
                          add(c);
                        }
                      }}
                      className="flex items-center gap-1 text-[9px] md:text-xs font-semibold text-[#B0B0B0] hover:text-[#E53935] transition-colors cursor-pointer shrink-0"
                      aria-label={isFav ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-colors duration-300 ${
                          isFav ? "fill-[#E53935] text-[#E53935]" : "text-[#B0B0B0]"
                        }`}
                      />
                      <span>Wishlist</span>
                    </button>

                    <Link
                      to={`/details/${c.id}`}
                      className="inline-flex items-center gap-1 text-[9px] md:text-xs font-semibold text-white hover:text-[#E53935] transition-colors shrink-0"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Image Viewer Modal */}
      <FullscreenImageViewer
        images={viewerImages}
        initialIndex={viewerInitialIndex}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </section>
  );
}
