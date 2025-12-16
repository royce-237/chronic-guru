import { useParams, useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useToast } from "@/components/ui/use-toast";

import { cannabisProducts, concentratesProducts, ediblesProducts } from "./ProductCategory";
import { products as cartridgesProducts } from "./Cartridges";
import { gummiesProducts } from "./Gummies";
import { products as preRollsProducts } from "./PreRolls";
import { products as drinksProducts } from "./Drinks";
import { products as merchProducts } from "./Merch";

const allProducts = [...cannabisProducts, ...concentratesProducts, ...ediblesProducts, ...cartridgesProducts, ...gummiesProducts, ...preRollsProducts, ...drinksProducts, ...merchProducts];

const weights = ["3.5 Grams", "7 Grams", "1/2 Ounce", "1 Ounce", "Quarter Pound", "Half Pound", "Pound"];

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const stateProduct = (location.state as any)?.product;
  const product = stateProduct ?? allProducts.find(p => {
    if (!p.name) return false;
    const pSlug = p.name
      .toLowerCase()
      .replace(/[|]/g, '')
      .replace(/[^\w\s-]+/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    return pSlug === slug;
  });
  
  const productImages = product?.images?.length ? product.images : (product?.image ? [product.image] : []);
  const [selectedImage, setSelectedImage] = useState(0);

  const { menuCategory } = (location.state as any)?.product || {};
  let relatedProductsSource = allProducts;

  if (menuCategory) {
    switch (menuCategory) {
      case "Gummies":
        relatedProductsSource = gummiesProducts;
        break;
      case "Cartridges":
        relatedProductsSource = cartridgesProducts;
        break;
      case "Pre-Rolls":
        relatedProductsSource = preRollsProducts;
        break;
      case "Drinks":
        relatedProductsSource = drinksProducts;
        break;
      case "Merch":
        relatedProductsSource = merchProducts;
        break;
      case "cannabis":
        relatedProductsSource = cannabisProducts;
        break;
      case "edibles":
        relatedProductsSource = ediblesProducts;
        break;
      case "concentrates":
        relatedProductsSource = concentratesProducts;
        break;
      default:
        relatedProductsSource = allProducts;
    }
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  useEffect(() => {
    if (product) {
      if (product.weightPrices) {
        const availableWeights = Object.keys(product.weightPrices);
        const weightToUse = availableWeights.includes(selectedWeight) ? selectedWeight : availableWeights[0];

        if (weightToUse) {
          if (selectedWeight !== weightToUse) {
            setSelectedWeight(weightToUse);
          }
          setUnitPrice(product.weightPrices[weightToUse]);
        }
      } else {
        // Fallback for products that might still not have weightPrices
        const priceString = product.price || product.priceRange;
        if (typeof priceString === 'string') {
          setUnitPrice(parseFloat(priceString.replace(/[^0-9.]+/g, '')) || 0);
        } else {
          setUnitPrice(typeof product.price === 'number' ? product.price : 0);
        }
        setSelectedWeight(''); // Reset weight selection
      }
    }
  }, [product, selectedWeight]);

  const handleWeightChange = (weight: string) => {
    setSelectedWeight(weight);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      const itemId = product.id || Date.now() + Math.random(); // Générer un ID unique si manquant
      addToCart({
        id: itemId,
        name: `${product.name} - ${selectedWeight}`,
        price: unitPrice,
        image: productImages[0] || '',
      }, quantity); // Passer la quantité sélectionnée
      toast({
        title: "Added to cart!",
        description: `${product.name} - ${selectedWeight} has been added to your cart.`,
      });
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      const itemId = product.id || Date.now() + Math.random();
      const wishlistItem = {
        id: itemId,
        name: `${product.name} - ${selectedWeight}`,
        price: unitPrice,
        image: productImages[0] || '',
      };
      if (isInWishlist(itemId)) {
        removeFromWishlist(itemId);
        toast({
          title: "Removed from wishlist",
          description: `${product.name} has been removed from your wishlist.`,
        });
      } else {
        addToWishlist(wishlistItem);
        toast({
          title: "Added to wishlist",
          description: `${product.name} has been added to your wishlist.`,
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Notice Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm">
        <strong>Notice:</strong> Notice: Due to an unexpected Phoenix Arizona Post strike, all shipments will now be sent via UPS. Please note that we are unable to deliver to PO Boxes or rural addresses at this time. UPS shipping is a flat rate of $50, with <strong>Free Shipping on orders over $300.</strong> Thank you for your understanding and continued support. If you have any questions or concerns, please don't hesitate to contact us.
      </div>

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground">
            <span className="cursor-pointer hover:text-foreground" onClick={() => navigate('/')}>Home</span>
            <span className="mx-2">/</span>
            <span className="cursor-pointer hover:text-foreground" onClick={() => navigate('/product-category/cannabis')}>Cannabis</span>
            <span className="mx-2">/</span>
            <span className="cursor-pointer hover:text-foreground" onClick={() => navigate('/product-category/cannabis')}>Vapes</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-card rounded-lg overflow-hidden border">
                <button 
                  className="absolute top-2 right-2 z-10 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
                  onClick={handleToggleWishlist}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
                <img
                  src={productImages[selectedImage] || ''}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              {productImages.length > 1 && (
                <div className="flex gap-2">
                  {productImages.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-20 rounded border-2 overflow-hidden ${
                        selectedImage === idx ? 'border-primary' : 'border-border'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                
                {/* Categories */}
                <div className="text-sm text-muted-foreground mb-2">
                  Categories: {product.categories?.join(", ") || "All Products"}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-foreground">{product.rating.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  <span className="text-sm text-muted-foreground ml-2">SKU: {product.sku}</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-2 text-sm">
                {product.colour && <div><strong>Colour:</strong> {product.colour}</div>}
                {product.flavour && <div><strong>Flavour:</strong> {product.flavour}</div>}
                {product.thc && <div><strong>THC:</strong> {product.thc}</div>}
                {product.cbd && <div><strong>CBD:</strong> {product.cbd}</div>}
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-foreground">
                ${unitPrice.toFixed(2)}
              </div>

              {/* Size Selection */}
              {product.weightPrices && Object.keys(product.weightPrices).length > 1 && (
                <div>
                  <div className="text-sm font-medium mb-2">Size: <span className="text-primary">{selectedWeight}</span></div>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(product.weightPrices).map((weight) => (
                      <Button
                        key={weight}
                        variant={selectedWeight === weight ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleWeightChange(weight)}
                        className="text-xs"
                      >
                        {weight}
                      </Button>
                    ))}
                  </div>
                  <button className="text-sm text-primary mt-2">× Clear</button>
                </div>
              )}

              {/* Points */}
              <div className="text-sm">
                Purchase this product now and earn <strong>12 Points!</strong>
              </div>

              {/* Price with quantity */}
              <div className="text-2xl font-bold text-foreground">
                ${(unitPrice * quantity).toFixed(2)}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4 items-center">
                <div className="flex items-center border rounded">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={incrementQuantity}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white h-12" onClick={handleAddToCart}>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to cart
                </Button>
              </div>

              {/* Payment Methods */}
              <div className="bg-card border rounded p-4 text-sm text-muted-foreground">
                <strong>Payment:</strong> We accept Email Money Transfers & Bitcoin.
              </div>
            </div>
          </div>

            {/* Related Products */}
            <div className="mt-16 border">
                <h2 className="text-2xl text-center font-bold text-foreground mb-6 underline">Related products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {relatedProductsSource
                        .filter(p => p.id !== product.id && (relatedProductsSource !== allProducts || p.category === product.category))
                        .slice(0, 6)
                        .map((relatedProduct: any) => (
                            <div key={relatedProduct.id} className="group relative bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                <button className="absolute top-2 right-2 z-10 bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors">
                                    <Heart className="h-4 w-4 text-gray-600" />
                                </button>

                                <div className="aspect-square overflow-hidden bg-gray-100">
                                    <img
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-3">
                                    <h3 className="text-xs font-medium text-foreground mb-1 line-clamp-2 min-h-[2rem]">
                                        {relatedProduct.name}
                                    </h3>

                                    <div className="flex items-center gap-1 mb-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-3 h-3 ${
                                                        i < relatedProduct.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-muted-foreground">{relatedProduct.reviews}</span>
                                    </div>

                                    <div className="text-sm font-bold text-foreground mb-2">
                                        {relatedProduct.priceRange || (typeof relatedProduct.price === 'number' ? `$${relatedProduct.price.toFixed(2)}` : relatedProduct.price)}
                                    </div>
                                    <Button
                                        size="sm"
                                        className="w-full bg-green-600 hover:bg-green-700 text-white text-xs h-8"
                                        onClick={() => {
                                            const slug = relatedProduct.name
                                                .toLowerCase()
                                                .replace(/[|]/g, '')
                                                .replace(/[^\w\s-]+/g, '')
                                                .replace(/\s+/g, '-')
                                                .replace(/-+/g, '-')
                                                .trim();
                                            navigate(`/product/${slug}`, { state: { product: relatedProduct, menuCategory: menuCategory } });
                                            window.scrollTo(0, 0);
                                        }}
                                    >
                                        <ShoppingCart className="h-3 w-3 mr-1" />
                                        IN STOCK
                                    </Button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

          {/* Tabs Section */}
          <div className="mt-12">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger 
                  value="description" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger 
                  value="additional" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Additional information
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Reviews ({product.reviews})
                </TabsTrigger>
                <TabsTrigger 
                  value="refer" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Refer a Friend
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose prose-sm max-w-none">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Buy {product.name} Exclusively At Chronic Guru's Curated Online Dispensary Phoenix Arizona.
                  </h2>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="additional" className="mt-6">
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-4 py-3">
                    <span className="font-medium text-foreground">Quantity</span>
                    <span className="text-muted-foreground">2 Ounces, 2 Grams, 3.5 Grams, 7 Grams, 14 Grams, 1 Ounce</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-8">
                  {/* Reviews Summary */}
                  <div className="flex gap-8 items-start">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-foreground mb-2">{product.rating.toFixed(2)}</div>
                      <div className="flex justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">Average of {product.reviews} reviews</div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm w-3">{star}</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-400" 
                              style={{ width: star === 5 ? '100%' : '0%' }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-8 text-right">
                            {star === 5 ? product.reviews : 0}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-6 border-t pt-6">
                    {product.reviews > 0 && (
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                            <span className="text-sm">O</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <div className="text-sm font-medium text-foreground mb-1">
                              Olivier Banville <span className="text-muted-foreground font-normal">– May 7, 2023</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Bonne brume</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Add Review Section */}
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Add a review</h3>
                    <p className="text-sm text-muted-foreground">
                      You must be <span className="text-green-600">logged in</span> to post a review.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="refer" className="mt-6">
                <div className="bg-green-50 border border-green-200 rounded p-4 text-green-700">
                    <p>Please <span className="font-medium">register</span> to get your referral link.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;