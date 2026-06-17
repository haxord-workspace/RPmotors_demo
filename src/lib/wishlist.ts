export interface WishlistCar {
  id: number;
  name: string;
  price: string;
  image: string;
  year: number;
  fuel: string;
}

export function getWishlistCars(): WishlistCar[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("wishlistCars");
  try {
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Error parsing wishlistCars from localStorage:", e);
    return [];
  }
}

export function addToWishlist(car: {
  id: number;
  name: string;
  price: string;
  img: string;
  year: number;
  fuel: string;
}): void {
  if (typeof window === "undefined") return;
  const list = getWishlistCars();
  if (!list.some((c) => c.id === car.id)) {
    list.push({
      id: car.id,
      name: car.name,
      price: car.price,
      image: car.img, // Match "image" property from requirements
      year: car.year,
      fuel: car.fuel,
    });
    localStorage.setItem("wishlistCars", JSON.stringify(list));
    window.dispatchEvent(new Event("wishlist-change"));
  }
}

export function removeFromWishlist(carId: number): void {
  if (typeof window === "undefined") return;
  const list = getWishlistCars();
  const updated = list.filter((c) => c.id !== carId);
  localStorage.setItem("wishlistCars", JSON.stringify(updated));
  window.dispatchEvent(new Event("wishlist-change"));
}

export function isWishlisted(carId: number): boolean {
  const list = getWishlistCars();
  return list.some((c) => c.id === carId);
}
