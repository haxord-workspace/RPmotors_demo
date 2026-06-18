import { useState, useEffect } from "react";
import {
  getWishlistCars,
  addToWishlist,
  removeFromWishlist,
  isWishlisted,
  WishlistCar,
} from "@/lib/wishlist";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<WishlistCar[]>([]);

  useEffect(() => {
    // Initial load
    setWishlist(getWishlistCars());

    const handleWishlistChange = () => {
      setWishlist(getWishlistCars());
    };

    window.addEventListener("wishlist-change", handleWishlistChange);
    return () => {
      window.removeEventListener("wishlist-change", handleWishlistChange);
    };
  }, []);

  const add = (car: {
    id: number;
    name: string;
    price: string;
    img: string;
    year: number;
    fuel: string;
  }) => {
    addToWishlist(car);
  };

  const remove = (carId: number) => {
    removeFromWishlist(carId);
  };

  const has = (carId: number) => {
    return isWishlisted(carId);
  };

  return {
    wishlist,
    count: wishlist.length,
    add,
    remove,
    has,
  };
}
