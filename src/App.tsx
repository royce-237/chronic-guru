import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import PointsRewards from "./pages/PointsRewards";
import ContactUs from "./pages/ContactUs";
import OurHistory from "./pages/OurHistory";
import Reviews from "./pages/Reviews";
import Gummies from "./pages/Gummies";
import Cartridges from "./pages/Cartridges";
import PreRolls from "./pages/PreRolls";
import Concentrates from "./pages/Concentrates";
import Drinks from "./pages/Drinks";
import Merch from "./pages/Merch";
import Cart from "./pages/Cart";
import SearchResults from "./pages/SearchResults";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <WishlistProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product-category/:category" element={<ProductCategory />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/points-rewards" element={<PointsRewards />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/our-history" element={<OurHistory />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/gummies" element={<Gummies />} />
              <Route path="/cartridges" element={<Cartridges />} />
              <Route path="/pre-rolls" element={<PreRolls />} />
              <Route path="/product-category/concentrates" element={<Concentrates />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/wishlist" element={<Wishlist />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </TooltipProvider>
      </WishlistProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
