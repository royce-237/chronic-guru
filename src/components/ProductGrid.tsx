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
    id: 778594,
    name: "Trap Queen",
    price: 135.00,
    originalPrice: 265.00,
    rating: 0,
    reviews: 0,
    badge: "Hybrid",
    image: "/GuruImg/imgi_145_Trap-Queen-web-FULL.png",
  },
  {
    id: 778426,
    name: "Infatuation",
    price: 265.00,
    originalPrice: null,
    rating: 0,
    reviews: 0,
    badge: "Hybrid",
    image: "/GuruImg/imgi_156_Inflation-web-FULL.png",
  },
  {
    id: 697504,
    name: "Grape OG",
    price: 12.99,
    originalPrice: 265.00,
    rating: 4.79,
    reviews: 15,
    badge: "Indica",
    image: "/GuruImg/imgi_167_Grape-OG-Web-FULL-1.png",
  },
  {
    id: 659656,
    name: "Gas Can",
    price: 12.99,
    originalPrice: 265.00,
    rating: 4.40,
    reviews: 11,
    badge: "Indica",
    image: "/GuruImg/imgi_178_Gas-Can-web-FULL.png",
  },
  {
    id: 629552,
    name: "Crystal Runtz",
    price: 12.99,
    originalPrice: 265.00,
    rating: 4.75,
    reviews: 13,
    badge: "Hybrid",
    image: "/GuruImg/imgi_189_Crystal-Runtz-web-FULL.png",
  },
  {
    id: 576916,
    name: "Cherry Sangria",
    price: 12.99,
    originalPrice: 265.00,
    rating: 4.91,
    reviews: 12,
    badge: "Hybrid",
    image: "/GuruImg/imgi_200_Cherry-Sangria-web-FULL.png",
  },
];

const concentratesProducts = [
  {
    id: 1,
    name: "Live Rosin Disposable",
    price: 60.00,
    originalPrice: null,
    rating: 5,
    reviews: 98,
    badge: "Live Rosin",
    image: "/Online/imgi_78_live-rosin-png.png",
  },
  {
    id: 2,
    name: "THCa Diamonds",
    price: 40.00,
    originalPrice: null,
    rating: 5,
    reviews: 46,
    badge: "THCa Diamond",
    image: "/Online/imgi_82_diamonds-png.png",
  },
  {
    id: 3,
    name: "Hash",
    price: 30.00,
    originalPrice: null,
    rating: 5,
    reviews: 69,
    badge: "Hash",
    image: "/Online/imgi_104_hash-png.png",
  },
  {
    id: 4,
    name: "CBD Isolate",
    price: 6.00,
    originalPrice: null,
    rating: 5,
    reviews: 0,
    badge: "CBD Isolate",
    image: "/Online/imgi_105_CBD-ISOLATE-9-scaled-150x150.jpg",
  },
  {
    id: 5,
    name: "THC Cartridge",
    price: 35.00,
    originalPrice: null,
    rating: 5,
    reviews: 47,
    badge: "THC Cartridge",
    image: "/Online/imgi_93_THCA-Cart.png",
  },
  {
    id: 6,
    name: "9 Pound Hammer Kief",
    price: 14.00,
    originalPrice: 82.00,
    rating: 5,
    reviews: 98,
    badge: "Kief",
    image: "/GuruImg/imgi_10_tag-solid.svg",
  },
];

const ediblesProducts = [
  {
    id: 1,
    name: "60mg Gummies",
    price: 45.00,
    originalPrice: null,
    rating: 5,
    reviews: 0,
    badge: "Gummy",
    image: "/Edibles/imgi_90_60MG-Gummies-Top-Down.png",
  },
  {
    id: 6,
    name: "Zaza Brownie",
    price: 12.00,
    originalPrice: null,
    rating: 5,
    reviews: 0,
    badge: "Brownie",
    image: "/Edibles/imgi_148_Zaza-Brownie-Product-WEB-2.png",
  },
  {
    id: 7,
    name: "Zaza Cookie",
    price: 12.00,
    originalPrice: null,
    rating: 5,
    reviews: 0,
    badge: "Cookie",
    image: "/Edibles/imgi_158_Stoned-Chunky-Web-ONE.png",
  },
  {
    id: 8,
    name: "Pink Lemonade",
    price: 5.00,
    originalPrice: 8.00,
    rating: 5,
    reviews: 0,
    badge: "Drink",
    image: "/Edibles/imgi_168_Pink-Lemonade-WEB.png",
  },
  {
    id: 9,
    name: "Fruit Punch",
    price: 5.00,
    originalPrice: 8.00,
    rating: 5,
    reviews: 0,
    badge: "Drink",
    image: "/Edibles/imgi_178_Fruit-Punch-Product-WEB-1.png",
  },
  {
    id: 10,
    name: "Lemonade",
    price: 5.00,
    originalPrice: 8.00,
    rating: 5,
    reviews: 0,
    badge: "Drink",
    image: "/Edibles/imgi_188_Lemonade-Product-WEB.png",
  },
];

const ProductGrid = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: any, categoryType: string) => {
    const productName = product.name;
    const slug = productName
      .toLowerCase()
      .replace(/[|]/g, '') // Remove pipes first
      .replace(/[^\w\s-]+/g, '') // Remove special characters except spaces and dashes
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/-+/g, '-') // Collapse multiple dashes
      .trim();

    let categories = [categoryType];
    if (product.badge) {
      categories.push(product.badge);
    }

    navigate(`/product/${slug}`, { state: { product: { ...product, categories } } });
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
                    className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-white"
                    onClick={() => handleProductClick(product, category)}
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