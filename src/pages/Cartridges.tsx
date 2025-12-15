import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductCategories from "@/components/ProductCategories.tsx";
import {useState} from "react";

export const products = [
  {
    id: 1,
    name: "Chronic Guru 510 Thread Vape Battery",
    priceRange: "$15.00",
    rating: 4.4,
    reviews: 11,
    image: "/img/cartridges/img.png",
    inStock: true,
    category: "Cartridges",
    badges: []
  },
  {
    id: 2,
    name: "Live Rosin Disposable",
    priceRange: "$60.00",
    rating: 4.8,
    reviews: 25,
    image: "/img/cartridges/img_1.png",
    inStock: true,
    badges: ["Hybrid Indica Sativa 62%", "High, Medium Potency"],
    category: "Cartridges",
  },
  {
    id: 3,
    name: "THC Cartridge",
    priceRange: "$45.00",
    rating: 4.6,
    reviews: 18,
    image: "/img/cartridges/img_2.png",
    inStock: true,
    badges: ["High, Medium Potency"],
    category: "Cartridges",
  },
      {
          id: 4,
          name: "THC Disposable Vape Pens gorilla glue 4 2ML",
          priceRange: "$35.00",
          rating: 0,
          reviews: 0,
          image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_15_Gorilla-Glue-4-2000-mg-500x500.jpg",
          inStock: true,
          badges: ["Hybrid"],
          category: "Cartridges",
          weightPrices: { "1 Unit": 35.00 }
      },      {
          id: 5,
          name: "THC Disposable Vape Pens | 2ML | Keo Extracts | INDICA",
          priceRange: "$35.00",
          rating: 0,
          reviews: 0,
          image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_18_buy-no-name-vape-1-500x500.jpg",
          inStock: true,
          badges: ["Indica"],
          category: "Cartridges",
          weightPrices: { "1 Unit": 35.00 }
      },
      {
          id: 6,
          name: "THC Disposable Vape Pens | 2ML | Keo Extracts | SATIVA",
          priceRange: "$35.00",
          rating: 0,
          reviews: 0,
          image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_18_buy-no-name-vape-1-500x500.jpg",
          inStock: true,
          badges: ["Sativa"],
          category: "Cartridges",
          weightPrices: { "1 Unit": 35.00 }
      },    {
        id: 7,
        name: "THC Disposable Vape Pens Gorilla #4 3ML",
        priceRange: "$48.00",
        rating: 0,
        reviews: 0,
        image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_16_Gorilla-4-Disposable-Pen-3000mg-500x500.jpg",
        inStock: true,
        badges: ["Sativa"],
        category: "Cartridges",
        weightPrices: { "1 Unit": 48.00 }
    },
      {
          id: 8,
          name: "THC Disposable Vape Pens Gorilla #4 3ML Hybrid",
          priceRange: "$48.00",
          rating: 0,
          reviews: 0,
          image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_16_Gorilla-4-Disposable-Pen-3000mg-500x500.jpg",
          inStock: true,
          badges: ["Hybrid"],
          category: "Cartridges",
          weightPrices: { "1 Unit": 48.00 }
      },    {
        id: 9,
        name: "THC Disposable Vape Pens Gorilla #4 3ML Indica",
        priceRange: "$48.00",
        rating: 0,
        reviews: 0,
        image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_16_Gorilla-4-Disposable-Pen-3000mg-500x500.jpg",
        inStock: true,
        badges: ["Indica"],
        category: "Cartridges",
        weightPrices: { "1 Unit": 48.00 }
    },
      {
          id: 10,
          name: "THC Dual Chamber Disposable Vape Pens Gorilla Glue #4 6ML",
          priceRange: "$70.00",
          rating: 0,
          reviews: 0,
          image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_17_Gorilla-Glue-4-6000-mg-500x500.jpg",
          inStock: true,
          salePercentage: 10,
          category: "Cartridges",
          weightPrices: { "1 Unit": 70.00 }
      },  {
    id: 11,
    name: "Premium Distillate THC Disposable Vape Pens | 3ML | So High Extracts",
    priceRange: "$50.00",
    rating: 4.83,
    reviews: 6,
    image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_13_Sohigh-3ML-Disposable-500x500.png",
    inStock: true,
    salePercentage: 16,
    category: "Cartridges",
    weightPrices: { "1 Unit": 50.00 }
  },
  {
    id: 12,
    name: "Premium Distillate THC Disposable Vape Pens | 5ML | So High Extracts",
    priceRange: "$55.00",
    rating: 5.00,
    reviews: 8,
    image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_12_Sohigh-5ml-DIsposable-thc-500x500.png",
    inStock: true,
    salePercentage: 15,
    category: "Cartridges",
    weightPrices: { "1 Unit": 55.00 }
  },
  {
    id: 13,
    name: "Premium Distillate THC Vape Carts | White Tips",
    priceRange: "$30.00",
    rating: 4.50,
    reviews: 340,
    image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_18_buy-no-name-vape-1-500x500.jpg",
    inStock: true,
    salePercentage: null,
    category: "Cartridges",
    weightPrices: { "1 Unit": 30.00 }
  },
  {
    id: 14,
    name: "Shatter THC Vape Cartridges | 510 Thread 1.0ML | XO Extracts",
    priceRange: "$38.00",
    rating: 4.67,
    reviews: 123,
    image: "/Buy Weed Vapes Online Canada _ THC & CBD Vape Pens/imgi_19_xo-extracts-liquid-thc-carts-500x500.jpg",
    inStock: true,
    salePercentage: null,
    category: "Cartridges",
    weightPrices: { "1 Unit": 38.00 }
  }
];

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-8">
      <ul className="flex justify-center items-center space-x-2">
        <li>
          <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </Button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <Button
              onClick={() => paginate(number)}
              variant={currentPage === number ? 'default' : 'outline'}
            >
              {number}
            </Button>
          </li>
        ))}
        <li>
          <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

const Cartridges = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12); // You can adjust this value

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProductClick = (product: any) => {
    const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    navigate(`/product/${slug}`, { state: { product: { ...product, menuCategory: "Cartridges" } } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-xl md:text-4xl font-bold pb-8 flex flex-start">Cartridges</h1>
              <div className="flex rounded-xl mb-8 bg-white border border-gray-200 shadow-sm p-1" style={{ backgroundColor: '#f7f6f3' }}>
                  <div className="w-full p-8">
                      <p className="text-sm">
                          Our carts are strain-specific, 3rd-party lab tested, and made from clean, potent flower — no cut corners, no med card needed.
                      </p>
                  </div>
              </div>
              <div className="flex flex-col items-start p-8 border border-gray-200 rounded-xl shadow-sm mb-8 bg-sky-600">
                  <p className="text-sm text-white">No products were found matching your selection.</p>
              </div>
          </div>
            <h1 className="text-2xl pb-8 flex flex-start">In-stock Products in "Cartridges" Category</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden bg-gray-50 cursor-pointer"
                     onClick={() => handleProductClick(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto h-48 object-contain group-hover:scale-105 transition-transform duration-300"
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
                    {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={products.length}
            paginate={paginate}
            currentPage={currentPage}
          />

          <div className="text-center mt-16">
            <h1 className="text-black text-2xl font-bold mb-4 text-center">
                Shop By Category
            </h1>
            <p>Order online or pick up locally at one of our dispensaries – No Medical Card Required*</p>
              <ProductCategories />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cartridges;