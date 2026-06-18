import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useWishlist } from "@/hooks/useWishlist";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cars } from "@/data/cars";
import { FullscreenImageViewer } from "@/components/site/FullscreenImageViewer";
import { CarCard } from "@/components/site/CarCard";

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
    <div className="bg-[#050505] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
                Your Saved Inventory
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                My <span className="text-gradient-gold">Wishlist</span>
              </h1>
            </div>
            <div className="glass px-5 py-2.5 rounded-full text-sm font-medium bg-[#111] border border-white/5">
              Total Saved: <span className="text-gold font-bold">{wishlist.length}</span>{" "}
              {wishlist.length === 1 ? "Vehicle" : "Vehicles"}
            </div>
          </div>

          {wishlist.length === 0 ? (
            <div className="glass rounded-3xl p-12 md:p-20 text-center max-w-2xl mx-auto border border-white/5 animate-fade-up bg-[#111]">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
                <Heart className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Your Wishlist is Empty
              </h2>
              <p className="text-white/60 mb-8 text-sm md:text-base leading-relaxed">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-up">
              {wishlist.map((c) => {
                const originalCar = cars.find((item) => item.id === c.id);
                // Fallback dummy car structure just in case, though originalCar should exist.
                const fallbackCar = {
                  id: c.id,
                  name: c.name,
                  brand: "",
                  model: "",
                  year: c.year,
                  fuel: c.fuel,
                  trans: "Automatic",
                  price: c.price,
                  tag: "",
                  img: c.image,
                  images: [c.image],
                  interiorImages: [],
                  kmDriven: "30,000 KM",
                  mileage: "",
                  ownerDetails: "",
                  regNo: "",
                  description: "",
                  location: "",
                  contactInfo: { phone: "", email: "", whatsapp: "" },
                };
                const carToRender = originalCar || fallbackCar;

                return (
                  <div key={c.id} className="relative">
                    <CarCard
                      car={carToRender}
                      isFav={true}
                      onToggleWishlist={() => remove(c.id)}
                      onClickImage={() => openImageViewer(carToRender.images, 0)}
                    />
                  </div>
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
