import { useState, useEffect, useRef, TouchEvent, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface FullscreenImageViewerProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function FullscreenImageViewer({
  images,
  initialIndex,
  isOpen,
  onClose,
}: FullscreenImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  // Sync index when initialIndex changes (e.g. opened from a different thumbnail)
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || images.length === 0) return null;

  // Touch handlers for swipe support
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    const threshold = 50; // swipe threshold in px

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        handleNext(); // Swiped left
      } else {
        handlePrev(); // Swiped right
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between items-center select-none animate-fade-in"
      onClick={onClose}
    >
      {/* Top Header Controls */}
      <div className="w-full flex justify-between items-center p-6 z-10">
        <div className="text-white/60 text-sm font-semibold tracking-wider">RB MOTORS SHOWROOM</div>
        <button
          onClick={onClose}
          className="p-3.5 rounded-full bg-white/5 hover:bg-[#E53935] hover:scale-105 text-white transition-all cursor-pointer shadow-lg border border-white/10"
          aria-label="Close viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Slider Area */}
      <div
        className="w-full flex-1 flex items-center justify-center relative px-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking the image/arrows area
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation - Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-[#E53935] text-white transition-all duration-300 shadow-xl border border-white/10 hover:scale-110 cursor-pointer hidden md:flex items-center justify-center z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Selected Image */}
        <img
          src={images[currentIndex]}
          alt={`Vehicle preview slide ${currentIndex + 1}`}
          className="max-w-[95vw] md:max-w-[90%] max-h-[75vh] md:max-h-[80vh] object-contain rounded-lg animate-fade-in select-none"
        />

        {/* Navigation - Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-[#E53935] text-white transition-all duration-300 shadow-xl border border-white/10 hover:scale-110 cursor-pointer hidden md:flex items-center justify-center z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Counter & Info */}
      <div className="w-full flex flex-col items-center gap-1.5 pb-8 z-10">
        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/90 shadow-md">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="text-[10px] text-white/40 uppercase tracking-widest hidden md:block">
          Use Arrow Keys to Navigate • Swipe on Mobile
        </div>
      </div>
    </div>
  );
}
