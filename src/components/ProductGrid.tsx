import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cannabisProducts = [
  {
    id: 1,
    name: "Afghani Pink",
    price: 14.00,
    originalPrice: 825.00,
    rating: 4.8,
    reviews: 229,
    badge: "Indica",
    image: "https://images.unsplash.com/photo-1605286322420-c87c7909fc82?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Peachy Mack",
    price: 13.00,
    originalPrice: 775.00,
    rating: 4.7,
    reviews: 190,
    badge: "Hybrid",
    image: "https://images.unsplash.com/photo-1508424897574-a1261697e008?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Tropicana Jet Fuel",
    price: 15.00,
    originalPrice: 850.00,
    rating: 4.9,
    reviews: 280,
    badge: "Hybrid",
    image: "https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Bruce Banner",
    price: 15.00,
    originalPrice: 900.00,
    rating: 4.8,
    reviews: 76,
    badge: "Hybrid",
    image: "https://images.unsplash.com/photo-1607408518416-a8cc28e083bd?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Astro Pink Kush",
    price: 14.00,
    originalPrice: 800.00,
    rating: 4.7,
    reviews: 104,
    badge: "Indica",
    image: "https://images.unsplash.com/photo-1610982374120-0b3143daafd8?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Lemon Skunk",
    price: 12.00,
    originalPrice: 675.00,
    rating: 4.9,
    reviews: 134,
    badge: "Sativa",
    image: "https://images.unsplash.com/photo-1607408518416-d18cc5e1b776?w=300&h=300&fit=crop",
  },
];

const concentratesProducts = [
  {
    id: 7,
    name: "Premium Bubba Tuna THCa Diamonds",
    price: 28.00,
    originalPrice: 339.00,
    rating: 5.0,
    reviews: 1,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Rock Tuna Caviar",
    price: 27.00,
    originalPrice: 320.00,
    rating: 4.8,
    reviews: 6,
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1583585635793-0e1894c169bd?w=300&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Capital Haze Caviar",
    price: 27.00,
    originalPrice: 320.00,
    rating: 4.9,
    reviews: 7,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1628778463669-cc0d7e724c92?w=300&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Gas Mask Caviar",
    price: 51.00,
    originalPrice: 320.00,
    rating: 4.8,
    reviews: 11,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1609365651441-76e0e41d49ca?w=300&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Vintage Gas Caviar",
    price: 27.00,
    originalPrice: 320.00,
    rating: 4.8,
    reviews: 6,
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1610894642038-7fb3bd655edf?w=300&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Platinum Bubba Shatter",
    price: 21.00,
    originalPrice: 250.00,
    rating: 4.7,
    reviews: 15,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1629208082896-c33e5fe02b9a?w=300&h=300&fit=crop",
  },
];

const ediblesProducts = [
  {
    id: 13,
    name: "Fruity Pebbles White Chocolate | 500mg CBD | Keo Edibles",
    price: 22.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 45,
    badge: "CBD",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop",
  },
  {
    id: 14,
    name: "Cookies 'N' Crème Chocolate | 500mg CBD | Keo Edibles",
    price: 22.00,
    originalPrice: null,
    rating: 4.7,
    reviews: 38,
    badge: "CBD",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=300&fit=crop",
  },
  {
    id: 15,
    name: "Almond Crunch Bar Chocolate | 500mg CBD | Keo Edibles",
    price: 22.00,
    originalPrice: null,
    rating: 4.9,
    reviews: 52,
    badge: "CBD",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=300&fit=crop",
  },
  {
    id: 16,
    name: "Salted Cara-Melts | 300mg CBD | Twisted Extracts",
    price: 30.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 8,
    badge: "New",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=300&h=300&fit=crop",
  },
  {
    id: 17,
    name: "50 CBD Oil Tincture Drops | 1500mg CBD | Twisted Extracts",
    price: 85.00,
    originalPrice: 90.00,
    rating: 4.9,
    reviews: 4,
    badge: "5% OFF",
    image: "https://images.unsplash.com/photo-1610982374120-0b3143daafd8?w=300&h=300&fit=crop",
  },
  {
    id: 18,
    name: "Space Balls Chewies | 500mg | Space Ball Edibles",
    price: 19.99,
    originalPrice: 35.00,
    rating: 4.8,
    reviews: 223,
    badge: "43% OFF",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&h=300&fit=crop",
  },
];

const ProductGrid = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: any) => {
    const productName = product.name;
    const slug = productName
      .toLowerCase()
      .replace(/[|]/g, '') // Remove pipes first
      .replace(/[^\w\s-]+/g, '') // Remove special characters except spaces and dashes
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/-+/g, '-') // Collapse multiple dashes
      .trim();
    navigate(`/product/${slug}`, { state: { product } });
  };

  const renderProductSection = (
    title: string,
    subtitle: string,
    products: any[],
    category: string
  ) => (
    <div className="mb-16">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {title}
          </h2>
          <p className="text-muted-foreground">
            {subtitle}
          </p>
        </div>
        <Button 
          variant="outline"
          onClick={() => navigate(`/product-category/${category}`)}
        >
          View All →
        </Button>
      </div>

      {/* Product Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
              <div className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Product Image */}
                <div className="relative w-full h-[200px] overflow-hidden">
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
                    onClick={() => handleProductClick(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>

                {/* Product Info */}
                <div className="p-3 space-y-2">
                  <h3 className="font-medium text-card-foreground text-sm leading-tight line-clamp-2">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-4" />
      </Carousel>
    </div>
  );

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {renderProductSection(
          "Latest Cannabis",
          "Mix & Match to Save Up to 45% OFF",
          cannabisProducts,
          "cannabis"
        )}
        {renderProductSection(
          "Latest Concentrates",
          "Premium Quality Concentrates",
          concentratesProducts,
          "concentrates"
        )}
        {renderProductSection(
          "Latest Edibles",
          "Delicious Weed Edibles",
          ediblesProducts,
          "edibles"
        )}
      </div>
    </section>
  );
};

export default ProductGrid;