import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Iced Tea",
    priceRange: "$5.00 - $8.00",
    rating: 4.93,
    reviews: 87,
    image: "/img/drinks/ice.png",
    inStock: true,
    badges: ["30MG | 60MG | 90MG | 150MG | 10MG Potency"],
  },
  {
    id: 2,
    name: "Lemonade",
    priceRange: "$5.00 - $8.00",
    rating: 4.87,
    reviews: 109,
    image: "/img/drinks/lemon.png",
    inStock: true,
    badges: ["30MG | 60MG | 90MG | 150MG | 10MG Potency"],
  },
  {
    id: 3,
    name: "Fruit Punch",
    priceRange: "$5.00 - $8.00",
    rating: 4.91,
    reviews: 71,
    image: "/img/drinks/fruit.png",
    inStock: true,
    badges: ["30MG | 60MG | 90MG | 150MG | 10MG Potency"],
  },
  {
    id: 4,
    name: "Pink Lemonade",
    priceRange: "$5.00 - $8.00",
    rating: 4.98,
    reviews: 58,
    image: "/img/drinks/pink.png",
    inStock: true,
    badges: ["30MG | 60MG | 90MG | 150MG Potency"],
  },
  {
    id: 5,
    name: "Arnold Palmer",
    priceRange: "$8.00",
    rating: 5.0,
    reviews: 6,
    image: "/img/drinks/palmer.png",
    inStock: true,
    badges: ["150MG Potency"],
  },
];

const Drinks = () => {
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
            <h1 className="text-xl md:text-4xl font-bold pb-8 flex flex-start">Buy THC Drinks Online</h1>
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

          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8 mt-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">What Are THC Drinks?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THC drinks are cannabis-infused beverages that offer a discreet, smoke-free, and refreshing way to enjoy THC. Using advanced nano-emulsification technology, these beverages allow for faster onset times compared to traditional edibles, often kicking in within 15-30 minutes. Available in a variety of flavors and cannabinoid formulations, THC drinks provide a balanced, smooth experience perfect for social settings or personal relaxation. Whether you're looking for a light buzz or a stronger high, there's a THC beverage to fit your needs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Benefits of THC Drinks</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Fast-Acting Effects</strong> – Onset within 15-30 minutes, faster than traditional edibles.</li>
                <li><strong>Smoke-Free & Discreet</strong> – No inhalation needed, just sip and enjoy.</li>
                <li><strong>Precision Dosing</strong> – Measured THC content for a controlled experience.</li>
                <li><strong>Delicious & Refreshing</strong> – Available in teas, seltzers, lemonades, and more.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Popular THC Drink Products</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THC drinks come in many forms, including sparkling waters, teas, fruit juices, and infused lemonades, with varying THC dosages to suit both beginners and experienced consumers.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">FAQs About THC Drinks</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. How long do THC drinks take to kick in?</h3>
                  <p className="text-gray-700">Thanks to nano-emulsification, THC drinks typically take 15-30 minutes to take effect—faster than traditional edibles.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. How long do the effects of THC drinks last?</h3>
                  <p className="text-gray-700">Effects can last 3-6 hours, depending on dosage, metabolism, and tolerance.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. How do THC drinks compare to edibles?</h3>
                  <p className="text-gray-700">THC drinks offer a quicker onset and smoother effects than traditional edibles, which can take 1-2 hours to kick in.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Can I mix THC drinks with alcohol?</h3>
                  <p className="text-gray-700">It is not recommended to mix THC drinks with alcohol, as the combination can intensify effects and impair judgment.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-sm py-4 border-t">
              Browse our selection of premium THC drinks and enjoy a fast-acting, refreshing cannabis experience today.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Drinks;
