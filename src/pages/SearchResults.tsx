import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Import all product arrays
import { cannabisProducts, concentratesProducts, ediblesProducts } from "./ProductCategory";
import { products as cartridgesProducts } from "./Cartridges";
import { gummiesProducts } from "./Gummies";
import { products as preRollsProducts } from "./PreRolls";
import { products as drinksProducts } from "./Drinks";
import { products as merchProducts } from "./Merch";

// Combine all products into a single array
const allProducts = [
  ...cannabisProducts,
  ...concentratesProducts,
  ...ediblesProducts,
  ...cartridgesProducts,
  ...gummiesProducts,
  ...preRollsProducts,
  ...drinksProducts,
  ...merchProducts
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (query) {
      const filteredResults = allProducts.filter(product =>
        product.name && product.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-6">Search Results for "{query}"</h1>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {results.map(product => (
                <div
                  key={product.id || product.name} // Fallback to name if ID is missing
                  className="group relative bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <Link to={`/product/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`} state={{ product: { ...product, menuCategory: "Search" } }}>
                    <div className="relative overflow-hidden bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-card-foreground mb-2 text-sm leading-tight line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="mb-3">
                        <span className="font-bold text-foreground text-sm">
                          {product.priceRange || (typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground text-lg">No products found matching your search.</p>
              <Link to="/" className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Return to Shop
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
