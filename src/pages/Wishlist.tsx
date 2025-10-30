import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-6">Your Wishlist</h1>

          {wishlistItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Heart className="w-24 h-24 text-gray-400 mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Your wishlist is empty.</h2>
              <p className="text-gray-600 mb-8">Add items you love to your wishlist to find them easily later.</p>
              <Link to="/" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Return to Shop
              </Link>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map(item => (
                  <div key={item.id} className="group relative bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <button 
                      className="absolute top-2 right-2 z-10 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors text-red-500"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <Link to={`/product/${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`} state={{ product: item }}>
                      <div className="relative overflow-hidden bg-gray-50">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-card-foreground mb-2 text-sm leading-tight line-clamp-2">
                          {item.name}
                        </h3>
                        <div className="mb-3">
                          <span className="font-bold text-foreground text-sm">
                            {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-right">
                <Button variant="outline" onClick={clearWishlist}>
                  Clear Wishlist
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
