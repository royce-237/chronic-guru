import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Strawberry Fritter",
    priceRange: "$12.99 - $265.00",
    rating: 4.86,
    reviews: 8,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 25.6%", "🔴 High Potency"],
  },
  {
    id: 2,
    name: "Artificial Candy",
    priceRange: "$12.99 - $265.00",
    rating: 4.75,
    reviews: 5,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Indica 18.5%", "🔴 High Potency"],
  },
  {
    id: 3,
    name: "Gas Can",
    priceRange: "$12.99 - $265.00",
    rating: 4.33,
    reviews: 10,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Indica 21.4%", "🔴 High Potency"],
  },
  {
    id: 4,
    name: "Lemon Cherry Swirl #31",
    priceRange: "$12.99 - $265.00",
    rating: 4.66,
    reviews: 30,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 26.9%", "🔴 High Potency"],
  },
  {
    id: 5,
    name: "El Chivo",
    priceRange: "$12.99 - $265.00",
    rating: 4.75,
    reviews: 17,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Indica 17%", "🔴 High Potency"],
  },
  {
    id: 6,
    name: "Lizard Burger",
    priceRange: "$12.99 - $265.00",
    rating: 4.72,
    reviews: 19,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 18.54%", "🔴 High Potency"],
  },
  {
    id: 7,
    name: "Gumbo",
    priceRange: "$12.99 - $265.00",
    rating: 4.43,
    reviews: 8,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 19.75%", "🔴 High Potency"],
  },
  {
    id: 8,
    name: "Menage",
    priceRange: "$12.99 - $135.00",
    rating: 3.80,
    reviews: 6,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 18.7%", "🔴 High Potency"],
  },
  {
    id: 9,
    name: "Mule Fuel",
    priceRange: "$12.99 - $135.00",
    rating: 4.97,
    reviews: 38,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 24.31%", "🔴 High Potency"],
  },
  {
    id: 10,
    name: "Money Ball",
    priceRange: "$12.99 - $70.00",
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Indica 22.35%", "🔴 High Potency"],
  },
  {
    id: 11,
    name: "Grape OG",
    priceRange: "$12.99 - $70.00",
    rating: 5.0,
    reviews: 11,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Indica 22.9%", "🔴 High Potency"],
  },
  {
    id: 12,
    name: "Cherry Sangria",
    priceRange: "$12.99 - $70.00",
    rating: 5.0,
    reviews: 10,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 24.2%", "🔴 High Potency"],
  },
  {
    id: 13,
    name: "High Octane Mintz",
    priceRange: "$12.99 - $70.00",
    rating: 4.47,
    reviews: 16,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 26.92%", "🔴 High Potency"],
  },
  {
    id: 14,
    name: "Purple Voodoo",
    priceRange: "$12.99 - $70.00",
    rating: 4.78,
    reviews: 24,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 24.3%", "🔴 High Potency"],
  },
  {
    id: 15,
    name: "Sonic Boom",
    priceRange: "$12.99 - $40.00",
    rating: 4.64,
    reviews: 12,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Sativa 28.14%", "🔴 High Potency"],
  },
  {
    id: 16,
    name: "Purple Dream",
    priceRange: "$12.99 - $40.00",
    rating: 4.85,
    reviews: 14,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Indica 33.42%", "🔴 High Potency"],
  },
  {
    id: 17,
    name: "Blue Runtz",
    priceRange: "$12.99 - $40.00",
    rating: 5.0,
    reviews: 7,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 23.14%", "🔴 High Potency"],
  },
  {
    id: 18,
    name: "Gelato",
    priceRange: "$12.99 - $40.00",
    rating: 4.29,
    reviews: 8,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 24.6%", "🔴 High Potency"],
  },
  {
    id: 19,
    name: "Forbidden Runtz",
    priceRange: "$12.99 - $40.00",
    rating: 4.74,
    reviews: 36,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 28.4%", "🔴 High Potency"],
  },
  {
    id: 20,
    name: "Lemon Cherry Swirl #32",
    priceRange: "$12.99",
    rating: 4.95,
    reviews: 20,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 26.95%", "🔴 High Potency"],
  },
  {
    id: 21,
    name: "Horgurtz",
    priceRange: "$12.99",
    rating: 4.75,
    reviews: 5,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 24.15%", "🔴 High Potency"],
  },
  {
    id: 22,
    name: "Super Buff Cherry",
    priceRange: "$12.99",
    rating: 4.67,
    reviews: 13,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 22.11%", "🔴 High Potency"],
  },
  {
    id: 23,
    name: "Grape Candy",
    priceRange: "$12.99",
    rating: 4.82,
    reviews: 12,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Indica 28%", "🔴 High Potency"],
  },
  {
    id: 24,
    name: "Super Boof",
    priceRange: "$12.99",
    rating: 4.93,
    reviews: 57,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid 21.8%", "🔴 High Potency"],
  },
];

const PreRolls = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: any) => {
    const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    navigate(`/product/${slug}`, { state: { product } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-xl md:text-4xl font-bold pb-8 flex flex-start">PRE-ROLLS</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden bg-gray-50 cursor-pointer"
                     onClick={() => handleProductClick(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="font-medium text-card-foreground mb-2 text-sm leading-tight line-clamp-2 cursor-pointer hover:text-primary"
                    onClick={() => handleProductClick(product)}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      {product.reviews}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="font-bold text-foreground text-sm">
                      {product.priceRange}
                    </span>
                  </div>
                  {product.badges && product.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                          {product.badges.map((badge, idx) => (
                              <span
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded border border-gray-300"
                              >
                                  {badge}
                              </span>
                          ))}
                      </div>
                  )}
                  <Button
                    className="w-full bg-green-600 text-white hover:bg-green-700 text-xs h-8"
                    disabled={!product.inStock}
                    onClick={() => handleProductClick(product)}
                  >
                    {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4">What Are Cannabis Pre-Rolls?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Cannabis pre-rolls are ready-to-smoke joints made with premium cannabis flower, eliminating the need for rolling or preparation. Available in a variety of strains, sizes, and potency levels, pre-rolls are a convenient and consistent option for both casual and experienced users.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Unlike poorly packed or unevenly rolled joints, high-quality pre-rolls ensure an even burn, smooth draw, and full flavor—perfect for solo sessions or sharing.                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        Benefits of Cannabis Pre-Rolls
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Convenient & Ready to Use </strong> – No rolling or prep required.</li>
                        <li><strong>Even Burn & Smooth Smoke</strong> – Expertly rolled for the best experience.</li>
                        <li><strong>Strain Variety </strong> – Available in indica, sativa, and hybrid options.</li>
                        <li><strong>Perfect for Any Occasion</strong> – Great for personal use or social settings.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">Popular Cannabis Pre-Roll Types</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Single Pre-Rolls</strong> – Perfect for quick and easy sessions.</li>
                        <li><strong>Multi-Pack Pre-Rolls</strong> – A great option for variety and convenience.</li>
                        <li><strong>Infused Pre-Rolls</strong> – Enhanced with concentrates for extra potency.</li>
                        <li><strong>Mini Pre-Rolls</strong> – Smaller-sized for microdosing or shorter sessions.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">FAQs About Cannabis Pre-Rolls</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">1. What’s inside a cannabis pre-roll?</h3>
                            <p className="text-gray-700">High-quality pre-rolls contain cannabis flower (not trim or shake) to ensure a potent and flavorful smoking experience.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">2. How long does a cannabis pre-roll last?</h3>
                            <p className="text-gray-700">A standard pre-roll typically burns for 10-20 minutes, depending on size and smoking pace.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">3. Are cannabis pre-rolls as strong as regular flower?</h3>
                            <p className="text-gray-700">Yes, pre-rolls are made with the same high-quality flower found in loose buds, providing identical potency and effects. Infused pre-rolls contain additional THC concentrates for an even stronger experience.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">4. How should I store pre-rolls?</h3>
                            <p className="text-gray-700">Store pre-rolls in an airtight container in a cool, dark place to preserve freshness and potency.</p>
                        </div>
                    </div>
                </div>

                <p className="text-gray-700 text-sm py-4 border-t">
                    <span className="font-bold">Browse our selection</span> of premium cannabis pre-rolls and enjoy the ultimate convenience in cannabis smoking.
                </p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PreRolls;