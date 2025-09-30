import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Star, Grid, List, ShoppingCart } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "THC Dual Chamber Disposable Vape Pens | 6ML",
    price: 70.00,
    originalPrice: null,
    rating: 5,
    reviews: 1,
    image: "https://images.unsplash.com/photo-1595475038665-8cd6d43c9bf4?w=300&h=300&fit=crop&crop=center",
    inStock: true,
    salePercentage: null
  },
  {
    id: 2,
    name: "Premium Distillate THC Disposable Vape Pens | 1ML",
    price: 30.00,
    originalPrice: 35.00,
    rating: 5,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center",
    inStock: true,
    salePercentage: 15
  },
  {
    id: 3,
    name: "Premium Distillate THC Disposable Vape Pens | 2ML",
    price: 40.00,
    originalPrice: 45.00,
    rating: 5,
    reviews: 4,
    image: "https://images.unsplash.com/photo-1607473681481-72abb1152aa6?w=300&h=300&fit=crop&crop=center",
    inStock: true,
    salePercentage: 12
  },
  {
    id: 4,
    name: "Premium Distillate THC Disposable Vape Pens | 3ML",
    price: 50.00,
    originalPrice: 55.00,
    rating: 5,
    reviews: 6,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=300&fit=crop&crop=center",
    inStock: true,
    salePercentage: 9
  },
  {
    id: 5,
    name: "Premium Distillate THC Disposable Vape Pens | 5ML",
    price: 55.00,
    originalPrice: 60.00,
    rating: 5,
    reviews: 8,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=center",
    inStock: true,
    salePercentage: 18
  },
  {
    id: 6,
    name: "Premium Dual Chamber Vape Pens | 8 ML (4+4 G) | So High",
    price: 100.00,
    originalPrice: null,
    rating: 5,
    reviews: 1,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop&crop=center",
    inStock: true,
    salePercentage: null
  },
  {
    id: 7,
    name: "Premium Distillate THC Vape Carts | 1ML | So High Extracts",
    price: 30.00,
    originalPrice: 35.00,
    rating: 5,
    reviews: 5,
    image: "https://images.unsplash.com/photo-1595475038665-8cd6d43c9bf4?w=300&h=300&fit=crop&crop=center",
    inStock: true,
    salePercentage: 50
  },
  {
    id: 8,
    name: "Premium Distillate THC Vape Carts | White Tips",
    price: 30.00,
    originalPrice: 35.00,
    rating: 5,
    reviews: 340,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center",
    inStock: true,
    salePercentage: 18
  },
  {
    id: 9,
    name: "Shatter THC Vape Cartridges | 510 Thread 1.0ML | XO",
    price: 38.00,
    originalPrice: null,
    rating: 5,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1607473681481-72abb1152aa6?w=300&h=300&fit=crop&crop=center",
    inStock: true,
    salePercentage: null
  }
];

const ProductCategory = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Notice Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm">
        <strong>Notice:</strong> Notice: Due to an unexpected Canada Post strike, all shipments will now be sent via UPS. Please note that we are unable to deliver to PO Boxes or rural addresses at this time. UPS shipping is a flat rate of $50, with <strong>Free Shipping on orders over $300.</strong> Thank you for your understanding and continued support. If you have any questions or concerns, please don't hesitate to contact us.
      </div>

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className="w-64 flex-shrink-0">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-foreground mb-4">Product Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="in-stock" defaultChecked />
                    <label htmlFor="in-stock" className="text-sm text-foreground">In Stock</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="on-sale" />
                    <label htmlFor="on-sale" className="text-sm text-foreground">On Sale</label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Promotional Banner */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 mb-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-sm text-purple-600 font-medium mb-2">Contact Us</div>
                  <h2 className="text-2xl font-bold text-purple-800 mb-2">
                    First Time Ordering? Use Bulk5 for 5% OFF!
                  </h2>
                  <p className="text-purple-700 text-sm mb-4">
                    Attention New Customers: There's a $500 limit on your account.<br/>
                    To get it lifted, please email us with your Government-issued ID<br/>
                    with picture.
                  </p>
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">
                    Contact Us →
                  </Button>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌿</span>
                  </div>
                </div>
              </div>

              {/* Product Controls */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Showing all {products.length} results
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">Sort:</span>
                    <Select defaultValue="default">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Default sorting" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default sorting</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">Show:</span>
                    <Select defaultValue="50">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12 items</SelectItem>
                        <SelectItem value="24">24 items</SelectItem>
                        <SelectItem value="50">50 items</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex border rounded">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Wishlist Button */}
                    <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>

                    {/* Sale Badge */}
                    {product.salePercentage && (
                      <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        {product.salePercentage}%
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
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
                    <div className="p-4">
                      {/* Product Name */}
                      <h3 className="font-medium text-card-foreground mb-2 text-sm leading-tight line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < product.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          {product.reviews}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        {product.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="font-bold text-foreground">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      {/* In Stock Badge */}
                      <Button 
                        className="w-full bg-green-600 text-white hover:bg-green-700 text-xs h-8"
                        disabled={!product.inStock}
                      >
                        {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-12 prose prose-sm max-w-none">
                <p className="text-muted-foreground">
                  Looking for premium <strong>weed vapes in Canada?</strong> At Bulk Buddy, we offer a wide selection of THC and CBD vape pens and cartridges for a smooth, discreet, and flavorful experience. Perfect for on-the-go cannabis lovers who prioritize convenience and potency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategory;