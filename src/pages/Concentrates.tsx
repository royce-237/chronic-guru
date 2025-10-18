import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Live Rosin",
    priceRange: "$45.00",
    rating: 4.81,
    reviews: 27,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["Hybrid, Indica, Sativa", "🔴 High Potency"],
  },
  {
    id: 2,
    name: "Diamonds",
    priceRange: "$40.00",
    rating: 4.93,
    reviews: 92,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["🔴 High Potency"]
  },
  {
    id: 3,
    name: "Premiuim Hash",
    priceRange: "$30.00",
    rating: 5.0,
    reviews: 3,
    image: "/placeholder.svg",
    inStock: true,
    badges: ["🔴 High Potency"],
  },
  {
      id: 3,
      name: "CBD Isolate Powder",
      priceRange: "$6.00",
      rating: 5.0,
      reviews: 3,
      image: "/placeholder.svg",
      inStock: true,
      badges: [],
  },
];

const Concentrates = () => {
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
            <h1 className="text-xl md:text-4xl font-bold pb-8 flex flex-start">Buy THC Concentrates Online</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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

          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8 mt-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">What Are THC Concentrates?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THC concentrates are highly potent cannabis extracts containing elevated levels of THC, often ranging from 60% to 90%+ THC. Made through advanced extraction methods, concentrates deliver stronger effects than traditional flower while preserving the plant’s natural terpenes and flavors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Concentrates come in various textures and consistencies, including wax, shatter, live resin, rosin, budder, and diamonds, each offering a unique experience. Typically consumed via dabbing, vaping, or adding to flower, these extracts are ideal for users seeking intense potency and fast-acting effects.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Benefits of THC Concentrates</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Extremely Potent</strong> – Higher THC levels for stronger, longer-lasting effects.</li>
                <li><strong>Fast-Acting High</strong> – Effects kick in almost instantly when dabbed or vaped.</li>
                <li><strong>Pure & Flavorful</strong> – Preserves terpenes for enhanced aroma and taste.</li>
                <li><strong>Versatile Consumption</strong> – Can be dabbed, vaped, or added to flower.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Popular THC Concentrate Types</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Shatter</strong> – Glass-like texture, potent and easy to handle.</li>
                  <li><strong>Wax & Budder</strong> – Soft, creamy, and rich in terpenes.</li>
                  <li><strong>Live Resin</strong> – Fresh frozen extraction for maximum flavor.</li>
                  <li><strong>Rosin</strong> – Solventless, pure cannabis concentrate.</li>
                  <li><strong>Diamonds & Sauce</strong> – Ultra-potent crystalline structures with terpene-rich sauce.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">FAQs About THC Concentrates</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. How do you use THC concentrates?</h3>
                  <p className="text-gray-700">THC concentrates are typically consumed through dabbing (using a dab rig), vaping (with a compatible vaporizer), or adding to flower for an extra potency boost.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Are THC concentrates stronger than flower?</h3>
                  <p className="text-gray-700">Yes, concentrates contain far higher THC levels than traditional flower, often exceeding 60-90% THC, compared to the 15-30% THC in cannabis flower.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. What is the difference between live resin and shatter?</h3>
                  <p className="text-gray-700">Live resin is made from fresh frozen cannabis, preserving more terpenes for enhanced flavor, while shatter is known for its glass-like consistency and high potency.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Are THC concentrates legal?</h3>
                  <p className="text-gray-700">Yes, hemp-derived THC concentrates that comply with the 2018 Farm Bill (less than 0.3% Delta-9 THC by dry weight) are federally legal. However, state laws may vary.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-sm py-4 border-t">
              Browse our selection of premium THC concentrates and experience cannabis at its most potent.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Concentrates;
