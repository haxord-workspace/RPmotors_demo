import { Bookmark, ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
  isFav: boolean;
  onToggleWishlist: () => void;
  onClickImage: () => void;
}

export function CarCard({ car, isFav, onToggleWishlist, onClickImage }: CarCardProps) {
  return (
    <div className="flex flex-col mb-4">
      <article className="bg-[#111111] rounded-lg overflow-hidden shadow-lg relative flex flex-col group">
        {/* Image Section */}
        <div
          className="relative w-full aspect-[4/3] md:aspect-[5/4] cursor-pointer overflow-hidden"
          onClick={onClickImage}
        >
          <img
            src={car.images[0] || car.img}
            alt={car.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Gradient Overlay for Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent pointer-events-none"></div>

          {/* Top Left: Wishlist Icon */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleWishlist();
            }}
            className="absolute top-4 left-4 p-2 z-10 hover:scale-110 transition-transform"
            aria-label={isFav ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Bookmark
              className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                isFav ? "fill-white text-white" : "text-white/80 hover:text-white"
              }`}
            />
          </button>

          {/* Top Right: Info */}
          <div className="absolute top-4 right-4 text-right z-10 pointer-events-none">
            <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wider drop-shadow-md">
              {car.name}
            </h3>
            <p className="text-white/80 text-xs md:text-sm mt-0.5 font-medium drop-shadow-md">
              {car.year} {car.fuel} {car.kmDriven} Driven
            </p>
            <div className="text-white font-extrabold text-2xl md:text-3xl mt-1 tracking-tight drop-shadow-lg">
              {car.price}
            </div>
            <p className="text-white/70 text-[10px] md:text-xs font-medium">+Other Charges</p>
          </div>

          {/* Bottom Center: Pagination Dots (Mock) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 shadow-sm"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 shadow-sm"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 shadow-sm"></div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between px-4 md:px-5 py-3 md:py-4 bg-[#0a0a0a] border-t border-white/5 text-white/60 text-xs md:text-sm font-medium">
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <ThumbsUp className="w-4 h-4 md:w-5 md:h-5" /> 396
          </button>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> 58
          </button>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <Share2 className="w-4 h-4 md:w-5 md:h-5" /> 127
          </button>
          <div className="text-white/80 font-semibold">1.3k Views</div>
        </div>
      </article>

      {/* Footer Text */}
      <div className="text-center text-white/70 text-[10px] md:text-xs mt-3 mb-2 font-medium tracking-wide">
        Hurry Up, 1.3k Views on this car!
      </div>

      {/* Invisible link overlay to make the whole card clickable but still allow wishlist clicking */}
      <Link to={`/details/${car.id}`} className="absolute inset-0 z-0 opacity-0">
        View Details
      </Link>
    </div>
  );
}
