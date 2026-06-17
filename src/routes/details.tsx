import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { cars, getRtoDetails, Car } from "@/data/cars";
import { useWishlist } from "@/hooks/useWishlist";
import {
  ArrowLeft,
  Heart,
  Calendar,
  Fuel,
  Gauge,
  Milestone,
  User,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Map,
  Hash,
  ShieldAlert,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import { FullscreenImageViewer } from "@/components/site/FullscreenImageViewer";

export function VehicleDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { has, add, remove } = useWishlist();
  const [car, setCar] = useState<Car | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [galleryTab, setGalleryTab] = useState<"exterior" | "interior">("exterior");

  useEffect(() => {
    if (id) {
      const foundCar = cars.find((c) => c.id === parseInt(id));
      if (foundCar) {
        setCar(foundCar);
        setActiveImageIndex(0);
        setGalleryTab("exterior");
      } else {
        setCar(null);
      }
    }
    window.scrollTo(0, 0);
  }, [id]);

  const activeImages = car ? (galleryTab === "exterior" ? car.images : car.interiorImages) : [];

  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImages, setViewerImages] = useState<string[]>([]);
  const [viewerInitialIndex, setViewerInitialIndex] = useState(0);

  const openImageViewer = (images: string[], index: number) => {
    setViewerImages(images);
    setViewerInitialIndex(index);
    setViewerOpen(true);
  };

  if (!car) {
    return (
      <div className="bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20 pb-20 flex flex-col items-center justify-center">
          <div className="glass rounded-3xl p-12 text-center max-w-md mx-auto border border-white/5">
            <ShieldAlert className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl font-bold mb-4">Vehicle Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The vehicle you are looking for might have been sold or does not exist in our inventory.
            </p>
            <Link
              to="/#cars"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold-glow"
            >
              Back to Inventory
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isFav = has(car.id);
  const rto = getRtoDetails(car.regNo);

  const similarCars = cars
    .filter((c) => c.id !== car.id && (c.brand === car.brand || c.tag === car.tag))
    .slice(0, 3);

  const finalSimilarCars =
    similarCars.length > 0 ? similarCars : cars.filter((c) => c.id !== car.id).slice(0, 3);

  const nextImage = () => {
    if (activeImages.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % activeImages.length);
    }
  };

  const prevImage = () => {
    if (activeImages.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
    }
  };

  const handleWishlistToggle = () => {
    if (isFav) remove(car.id);
    else add(car);
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Back Button */}
          <button
            onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-white transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
          </button>

          {/* Title */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full glass-strong text-xs font-semibold text-gold">{car.brand}</span>
              <span className="px-3 py-1 rounded-full glass-strong text-xs font-semibold text-foreground/80">{car.tag}</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{car.name}</h1>
            <div className="flex items-center gap-2 mt-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" /> {car.location}
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-6 items-start mb-12">

            {/* Left Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Gallery Card */}
              {/* FIX: removed overflow-hidden from outer wrapper so thumbnails aren't clipped */}
              <div className="glass rounded-2xl sm:rounded-3xl border border-white/5 group/gallery w-full overflow-hidden">

                {/* Main Image with overlay tabs + nav */}
                {/* FIX 1: replaced fixed h-[240px] sm:h-[320px] md:h-[380px] lg:h-[500px] with aspect-video */}
                <div
                  className="relative overflow-hidden bg-black cursor-pointer aspect-video w-full max-h-[600px]"
                  onClick={() => openImageViewer(activeImages, activeImageIndex)}
                >
                  <img
                    src={activeImages[activeImageIndex]}
                    alt={`${car.name} - Slide ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover select-none hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Exterior / Interior toggle — overlaid on image, bottom-left */}
                  <div
                    className="absolute bottom-4 left-4 flex gap-2 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => { setGalleryTab("exterior"); setActiveImageIndex(0); }}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all backdrop-blur-sm border ${galleryTab === "exterior"
                          ? "bg-[#E53935] text-white border-[#E53935]"
                          : "bg-black/50 text-white/80 border-white/20 hover:bg-black/70"
                        }`}
                    >
                      Exterior
                    </button>
                    <button
                      onClick={() => { setGalleryTab("interior"); setActiveImageIndex(0); }}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all backdrop-blur-sm border ${galleryTab === "interior"
                          ? "bg-[#E53935] text-white border-[#E53935]"
                          : "bg-black/50 text-white/80 border-white/20 hover:bg-black/70"
                        }`}
                    >
                      Interior
                    </button>
                  </div>

                  {/* Prev / Next arrows */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#E53935] text-white opacity-0 group-hover/gallery:opacity-100 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#E53935] text-white opacity-0 group-hover/gallery:opacity-100 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Slide counter */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/70 text-xs font-semibold text-white/90">
                    {activeImageIndex + 1} / {activeImages.length}
                  </div>
                </div>

                {/* Thumbnails */}
                {/* FIX 5: replaced w-16 sm:w-20 aspect-[4/3] with fixed h-14 w-20 for consistent sizing */}
                <div className="p-3 bg-surface-elevated/40 border-t border-border/40 flex gap-2 overflow-x-auto scrollbar-none">
                  {activeImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative h-14 w-20 rounded-lg overflow-hidden shrink-0 transition-all ${activeImageIndex === idx
                          ? "ring-2 ring-primary scale-95"
                          : "opacity-50 hover:opacity-100"
                        }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Seller Description */}
              {/* FIX 2: removed max-w-3xl mx-auto lg:mx-0 — replaced with w-full so it aligns with gallery */}
              <div className="glass rounded-2xl sm:rounded-3xl p-6 md:p-8 border border-white/5 w-full">
                <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-4">Seller Description</h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {car.description}
                </p>
              </div>
            </div>

            {/* Right Column — Single Combined Card */}
            <div className="lg:sticky lg:top-28">
              <div className="glass rounded-2xl sm:rounded-3xl border border-white/5 overflow-hidden">

                {/* Price */}
                <div className="p-5 sm:p-6 border-b border-white/5 bg-surface/60">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-1">Selling Price</span>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-gold">{car.price}</span>
                </div>

                {/* Vehicle Overview */}
                <div className="p-5 sm:p-6 border-b border-white/5">
                  <h3 className="font-display text-sm font-bold mb-4 text-white/90 uppercase tracking-wide">Vehicle Overview</h3>
                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                        <Calendar className="w-3 h-3 text-gold" />
                        <span className="text-[10px] uppercase tracking-wide">Year</span>
                      </div>
                      <div className="font-semibold text-white text-sm">{car.year}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                        <Fuel className="w-3 h-3 text-gold" />
                        <span className="text-[10px] uppercase tracking-wide">Fuel</span>
                      </div>
                      <div className="font-semibold text-white text-sm">{car.fuel}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                        <Gauge className="w-3 h-3 text-gold" />
                        <span className="text-[10px] uppercase tracking-wide">Transmission</span>
                      </div>
                      <div className="font-semibold text-white text-sm">{car.trans}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                        <Milestone className="w-3 h-3 text-gold" />
                        <span className="text-[10px] uppercase tracking-wide">KM Driven</span>
                      </div>
                      <div className="font-semibold text-white text-sm">{car.kmDriven}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                        <Award className="w-3 h-3 text-gold" />
                        <span className="text-[10px] uppercase tracking-wide">Mileage</span>
                      </div>
                      <div className="font-semibold text-white text-sm">{car.mileage}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                        <User className="w-3 h-3 text-gold" />
                        <span className="text-[10px] uppercase tracking-wide">Owners</span>
                      </div>
                      <div className="font-semibold text-white text-sm">{car.ownerDetails}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                        <Hash className="w-3 h-3 text-gold" />
                        <span className="text-[10px] uppercase tracking-wide">Registration</span>
                      </div>
                      <div className="font-semibold text-white uppercase text-sm">{car.regNo}</div>
                    </div>
                  </div>
                </div>

                {/* RTO Information */}
                <div className="p-5 sm:p-6 border-b border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-primary" />
                    <h3 className="font-display text-sm font-bold text-white/90 uppercase tracking-wide">RTO Information</h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-xs flex items-center gap-1.5">
                        <Map className="w-3 h-3" /> State
                      </span>
                      <span className="font-semibold text-white text-xs">{rto.state}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-xs flex items-center gap-1.5">
                        <Hash className="w-3 h-3" /> RTO Code
                      </span>
                      <span className="font-semibold text-white text-xs">{rto.rtoCode}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-xs flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" /> District
                      </span>
                      <span className="font-semibold text-white text-xs">{rto.district}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-xs flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> Reg. Year
                      </span>
                      <span className="font-semibold text-white text-xs">{car.year}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-xs flex items-center gap-1.5">
                        <Gauge className="w-3 h-3" /> Vehicle Class
                      </span>
                      <span className="font-semibold text-white text-xs">{rto.vehicleClass}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-muted-foreground text-xs flex items-center gap-1.5 shrink-0">
                        <ShieldCheck className="w-3 h-3" /> Authority
                      </span>
                      <span className="font-semibold text-white text-xs text-right max-w-[55%]">{rto.authority}</span>
                    </div>
                  </div>
                </div>

                {/* Wishlist + Contact */}
                <div className="p-5 sm:p-6 flex flex-col gap-2.5">
                  <h4 className="font-display text-sm font-bold text-white/80 mb-1">Interested in this car?</h4>
                  <button
                    onClick={handleWishlistToggle}
                    className={`w-full flex items-center justify-center gap-2 rounded-full py-3 px-6 text-sm font-semibold transition-all ${isFav
                        ? "bg-primary text-white shadow-gold-glow"
                        : "bg-surface hover:bg-surface-elevated border border-white/10"
                      }`}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-current scale-110" : ""}`} />
                    {isFav ? "Saved to Wishlist" : "Add to Wishlist"}
                  </button>
                  <a
                    href={`tel:${car.contactInfo.phone.replace(/\s+/g, "")}`}
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-white text-black hover:bg-gold-foreground hover:text-white py-3 text-sm font-semibold transition-all"
                  >
                    <Phone className="w-4 h-4" /> Call Representative
                  </a>
                  <a
                    href={car.contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] text-white py-3 text-sm font-semibold"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp Inquiry
                  </a>
                  <a
                    href={`mailto:${car.contactInfo.email}?subject=Inquiry%20for%20${encodeURIComponent(car.name)}`}
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-secondary hover:bg-surface-elevated text-foreground py-3 text-sm font-semibold border border-white/5 transition-all"
                  >
                    <Mail className="w-4 h-4" /> Email Dealership
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Similar Vehicles */}
          <div className="border-t border-border/60 pt-12 sm:pt-16">
            <div className="flex flex-col gap-2 mb-8 sm:mb-10">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Handpicked Alternatives</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">Similar Vehicles</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {finalSimilarCars.map((c) => {
                const isSimilarFav = has(c.id);
                return (
                  <article
                    key={c.id}
                    className="group bg-[#151822] border border-white/5 hover:border-primary/20 rounded-2xl overflow-hidden hover-lift flex flex-row min-h-[140px] relative shadow-md"
                  >
                    {/* FIX 4: added self-stretch so image column always fills the full card height */}
                    <div
                      className="relative w-2/5 shrink-0 self-stretch bg-surface-elevated overflow-hidden border-r border-white/5 cursor-pointer"
                      onClick={() => openImageViewer(c.images, 0)}
                    >
                      <img
                        src={c.img}
                        alt={c.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-l-2xl"
                      />
                      <button
                        onClick={(e) => { e.stopPropagation(); isSimilarFav ? remove(c.id) : add(c); }}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-black/70 hover:bg-[#E53935] text-white z-10"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isSimilarFav ? "fill-[#E53935] text-[#E53935]" : ""}`} />
                      </button>
                    </div>

                    <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] font-bold text-[#E53935] uppercase tracking-wider">{c.brand}</span>
                          <span className="text-white/30">•</span>
                          <span className="text-[#B0B0B0] text-[10px] uppercase">{c.tag}</span>
                        </div>
                        <h3 className="font-display font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary">{c.name}</h3>
                        <div className="font-display font-bold text-gold mt-1 text-sm">{c.price}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {c.year} • {c.fuel} • {c.trans}
                      </div>
                      <div className="flex justify-between items-center text-xs pt-2 border-t border-white/10 mt-auto">
                        <button
                          onClick={(e) => { e.stopPropagation(); isSimilarFav ? remove(c.id) : add(c); }}
                          className="flex items-center gap-1 text-[#B0B0B0] hover:text-white"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isSimilarFav ? "fill-current text-[#E53935]" : ""}`} /> Wishlist
                        </button>
                        <Link to={`/details/${c.id}`} className="flex items-center gap-1 text-white hover:text-primary">
                          View <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

        </div>
      </main>
      <Footer />

      <FullscreenImageViewer
        images={viewerImages}
        initialIndex={viewerInitialIndex}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </div>
  );
}