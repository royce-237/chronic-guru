import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const gummiesProducts = [
  {
    id: 1,
    name: "60MG Gummies",
    category: "Gummy",
    priceRange: "$45.00",
    rating: 5,
    reviews: 102,
    image: "/img/gummies/60MG-Gummies-Top-Down-250x250.png",
    inStock: true,
    salePercentage: null,
    badges: ["🔴 High Potency"]
  },
  {
    id: 2,
    name: "1:1 Gummies",
    category: "Gummy",
    priceRange: "$25.00",
    rating: 5,
    reviews: 117,
    image: "/img/gummies/Untitled-design-18-300x300.png",
    inStock: true,
    salePercentage: null,
    badges: ["Hybrid", "Sativa", "🟢 Low Potency"]
  },
  {
    id: 3,
    name: "10MG Gummies",
    category: "Gummy",
    priceRange: "$20.00",
    rating: 4.5,
    reviews: 98,
    image: "/img/gummies/Untitled-design-3-300x300.png",
    inStock: true,
    salePercentage: null,
    badges: ["🔴 High Potency"]
  },
  {
    id: 4,
    name: "30MG Gummies",
    category: "Gummy",
    priceRange: "$20.00",
    rating: 5,
    reviews: 154,
    image: "/img/gummies/Guava-Gummy-Top-Down-1-1-250x250.png",
    inStock: true,
    salePercentage: null,
    badges: ["🔴 High Potency"]
  },
];

const Gummies = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popularity");

  const handleProductClick = (product: any) => {
    const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    navigate(`/product/${slug}`, { state: { product } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 flex flex-col gap-y-10">
            <div className="text-center mb-12">
                <h1 className="text-xl md:text-4xl font-bold pb-8 flex flex-start">Gummies</h1>

                <div className="flex items-stretch overflow-hidden rounded-xl mb-8 bg-white border border-gray-200 shadow-sm p-1" style={{ backgroundColor: '#f7f6f3' }}>
                    <div className="w-1/2 p-8 flex items-center justify-center">
                        <p className="text-sm leading-relaxed">
                            Fast-acting, full-flavor edibles made with clean ingredients and real cannabis.<br/>
                            No card needed. Just chew, chill, and feel it.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img
                            className="w-full h-full object-cover rounded-xl"
                            src="/img/gummies/Cannabis-Gummies.jpg"
                            alt="thc gummies"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start p-8 bg-white border border-gray-200 rounded-xl shadow-sm mb-8 " style={{ backgroundColor:'#f0f0f0' }}>
                    <h2 className="font-bold text-2xl mb-2">Products Available for Shipping</h2>
                    <p className="text-sm text-gray-600">All products available for shipping</p>
                </div>
            </div>

            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-300">
                <p className="text-sm text-gray-600">Showing all {gummiesProducts.length} results</p>
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Sorted by</label>
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-sm cursor-pointer hover:border-gray-400 focus:outline-none focus:border-green-500"
                        >
                            <option value="popularity">popularity</option>
                            <option value="rating">average rating</option>
                            <option value="latest">latest</option>
                            <option value="price-low">price: low to high</option>
                            <option value="price-high">price: high to low</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gummiesProducts.map((product) => (
                    <div
                        key={product.id}
                        className="group relative bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                        <div className="relative overflow-hidden bg-gray-50 cursor-pointer"
                             onClick={() => handleProductClick(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                      From {product.priceRange}
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
                    {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

            <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4">What Are THC Gummies?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        THC gummies are cannabis-infused edibles that provide a tasty, smoke-free alternative to traditional THC consumption. Designed for precise dosing and long-lasting effects, gummies are absorbed through the digestive system, offering a gradual onset and extended high compared to inhaled cannabis.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Available in a variety of flavors, strengths, and cannabinoid blends, THC gummies are perfect for relaxation, focus, creativity, or deep sleep, depending on the formula.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">Benefits of THC Gummies</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Long-Lasting High</strong> – Effects typically last 4-8 hours or more.</li>
                        <li><strong>Discreet & Convenient</strong> – No smoke, no smell—just delicious potency.</li>
                        <li><strong>Precise Dosing</strong> – Measured THC content for a consistent experience.</li>
                        <li><strong>Variety of Options</strong> – Available in different flavors, dosages, and cannabinoid blends.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">Popular THC Gummy Types</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Full-Spectrum Gummies</strong> – Contain a full range of cannabinoids for the entourage effect.</li>
                        <li><strong>High-Potency Gummies</strong> – Extra-strong for experienced users.</li>
                        <li><strong>CBD + THC Gummies</strong> – Balanced for relaxation without overwhelming effects.</li>
                        <li><strong>Sleep Gummies</strong> – Infused with CBN, CBD, or melatonin for nighttime relief.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">FAQs About THC Gummies</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">1. How long do THC gummies take to kick in?</h3>
                            <p className="text-gray-700">THC gummies typically take 30 minutes to 2 hours to take effect, depending on metabolism and dosage.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">2. How long do THC gummies last?</h3>
                            <p className="text-gray-700">The effects can last 4-8 hours, making them one of the longest-lasting cannabis consumption methods.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">3. How strong are THC gummies?</h3>
                            <p className="text-gray-700">THC gummies vary in potency, from low-dose (5mg per gummy) to high-strength options (50mg+ per gummy). Always check the label and start with a low dose if new to edibles.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">4. What's the difference between THC gummies and smoking?</h3>
                            <p className="text-gray-700">Gummies produce a stronger, more body-centered high because THC is metabolized into 11-hydroxy-THC, which is more potent than inhaled THC.</p>
                        </div>
                    </div>
                </div>

                <p className="text-gray-700 text-sm py-4 border-t">
                    <span className="font-bold">Browse our selection</span> of premium THC gummies and experience long-lasting, flavorful cannabis effects today.
                </p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gummies;