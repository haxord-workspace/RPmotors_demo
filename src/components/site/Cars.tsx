import { useState } from "react";
import { Link } from "react-router-dom";
import { cars } from "@/data/cars";
import { useWishlist } from "@/hooks/useWishlist";
import { FullscreenImageViewer } from "./FullscreenImageViewer";
import { CarCard } from "./CarCard";

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
    <section id="cars" className="relative py-28 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Featured Inventory
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
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
                    : "glass text-white/70 hover:text-gold border border-white/5 bg-[#111]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Updated Grid for Vertical Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {list.map((c) => {
            const isFav = has(c.id);
            return (
              <div key={c.id} className="relative">
                <CarCard
                  car={c}
                  isFav={isFav}
                  onToggleWishlist={() => {
                    if (isFav) {
                      remove(c.id);
                    } else {
                      add(c);
                    }
                  }}
                  onClickImage={() => openImageViewer(c.images, 0)}
                />
              </div>
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
