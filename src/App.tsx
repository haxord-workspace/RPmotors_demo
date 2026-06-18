import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Lenis from "lenis";
import { Index } from "./routes/index";
import { Wishlist } from "./routes/wishlist";
import { VehicleDetails } from "./routes/details";
import { RtoDirectory } from "./routes/rto";
import { RtoDetails } from "./routes/rtoDetails";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/details/:id" element={<VehicleDetails />} />
          <Route path="/rto" element={<RtoDirectory />} />
          <Route path="/rto/:code" element={<RtoDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
