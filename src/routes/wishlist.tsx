import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useWishlist } from "@/hooks/useWishlist";
import { Fuel, Gauge, Calendar, Trash2, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cars } from "@/data/cars";
import { FullscreenImageViewer } from "@/components/site/FullscreenImageViewer";

export function Wishlist() {
  const { wishlist, remove } = useWishlist();

  // Fullscreen image viewer state
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImages, setViewerImages] = useState<string[]>([]);
  const [viewerInitialIndex, setViewerInitialIndex] = useState(0);

  const openImageViewer = (images: string[], index: number) => {
    setViewerImages(images);
    setViewerInitialIndex(index);
    setViewerOpen(true);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
                Your Saved Inventory
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                My <span className="text-gradient-gold">Wishlist</span>
              </h1>
            </div>
            <div className="glass px-5 py-2.5 rounded-full text-sm font-medium">
              Total Saved: <span className="text-gold font-bold">{wishlist.length}</span>{" "}
              {wishlist.length === 1 ? "Vehicle" : "Vehicles"}
            </div>
          </div>

          {wishlist.length === 0 ? (
            <div className="glass rounded-3xl p-12 md:p-20 text-center max-w-2xl mx-auto border border-white/5 animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
                <Heart className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Your Wishlist is Empty
              </h2>
              <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                Browse our premium fleet of handpicked pre-owned vehicles and save your favorites to
                compare and view their details.
              </p>
              <Link
                to="/#cars"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold-glow transition-transform hover:scale-105"
              >
                Explore Inventory <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
              {wishlist.map((c) => {
                const originalCar = cars.find((item) => item.id === c.id);
                const kmDriven = originalCar?.kmDriven || "30,000 KM";
                const trans = originalCar?.trans || "Automatic";
                const brand = originalCar?.brand || "";
                const tag = originalCar?.tag || "";
                const carImages = originalCar?.images || [c.image];

                return (
                  <article
                    key={c.id}
                    className="group bg-[#151822] border border-white/5 hover:border-primary/20 rounded-[12px] overflow-hidden hover-lift flex flex-row h-[120px] md:h-[140px] lg:h-[160px] relative shadow-md"
                  >
                    {/* Left side: Vehicle Image */}
                    <div
                      className="relative w-1/3 md:w-2/5 shrink-0 bg-surface-elevated overflow-hidden border-r border-white/5 cursor-pointer"
                      onClick={() => openImageViewer(carImages, 0)}
                    >
                      <img
                        src={c.image}
                        alt={c.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-l-[12px]"
                      />
                      {/* Floating Wishlist Icon on Top-Right of image */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          remove(c.id);
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-[#E53935] hover:scale-105 text-white transition-all cursor-pointer z-10 shadow-md border border-white/10"
                        title="Remove from Wishlist"
                      >
                        <Heart className="w-3 h-3 fill-[#E53935] text-[#E53935]" />
                      </button>
                    </div>

                    {/* Right side: Info */}
                    <div className="p-3 md:p-4 flex flex-col justify-between flex-1 min-w-0">
                      <div className="min-w-0">
                        {/* Brand & Tag badges */}
                        <div className="flex items-center gap-1.5 mb-0.5 md:mb-1">
                          {brand && (
                            <span className="text-[9px] font-bold text-[#E53935] uppercase tracking-wider">
                              {brand}
                            </span>
                          )}
                          {brand && tag && <span className="text-white/25 text-[9px]">•</span>}
                          {tag && (
                            <span className="text-[#B0B0B0] text-[9px] uppercase tracking-wider font-semibold">
                              {tag}
                            </span>
                          )}
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
                          <span>{trans}</span>
                        </div>

                        {/* KM Driven */}
                        <div className="text-[9px] md:text-xs text-[#B0B0B0] mt-0.5 font-medium">
                          {kmDriven} Driven
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between gap-2 mt-2 border-t border-white/5 pt-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            remove(c.id);
                          }}
                          className="flex items-center gap-1 text-[9px] md:text-xs font-semibold text-[#E53935] hover:text-[#B0B0B0] transition-colors cursor-pointer shrink-0"
                          title="Remove from Wishlist"
                        >
                          <Heart className="w-3.5 h-3.5 fill-[#E53935] text-[#E53935]" />
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
          )}
        </div>
      </main>
      <Footer />

      {/* Fullscreen Image Viewer Modal */}
      <FullscreenImageViewer
        images={viewerImages}
        initialIndex={viewerInitialIndex}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </div>
  );
}
