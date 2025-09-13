import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 89,
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Bluetooth Speaker Pro",
    price: 79.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 156,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Gaming Mechanical Keyboard",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 203,
    badge: "Gaming",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "4K Webcam HD",
    price: 99.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 67,
    badge: "New",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Portable Power Bank",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.4,
    reviews: 312,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1609592806725-3f0c4c1b2e0d?w=300&h=300&fit=crop",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Latest Products
            </h2>
            <p className="text-muted-foreground">
              Mix & Match to Save Up to 45% OFF
            </p>
          </div>
          <Button variant="outline">View All →</Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Badge */}
                {product.badge && (
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}

                {/* Add to Cart Button */}
                <Button
                  variant="hero"
                  size="sm"
                  className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <h3 className="font-medium text-card-foreground text-sm leading-tight">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.reviews}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;