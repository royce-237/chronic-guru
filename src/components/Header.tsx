import {Search, ShoppingCart, User, Menu, Grid2x2, ChevronDown, ChevronRight, Heart} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";

const Header = () => {

  const { cartItems } = useCart();

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const { wishlistItems } = useWishlist();
  const wishlistCount = wishlistItems.length;

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();



  const handleSearch = (e: React.FormEvent) => {

    e.preventDefault();

    if (searchTerm.trim()) {

      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);

    }

  };



  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-sm">
        <p>Free Express Shipping on orders $150+</p>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Chronic Guru" className="h-10" />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 relative">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Search for products, categories or brands..."
                  className="w-full pl-4 pr-12 h-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground">
                  <Search className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Sign In</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative" asChild>
                <Link to="/wishlist">
                  <Heart className="h-4 w-4" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative" asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                </Link>
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                  <nav className="flex flex-col gap-4 pt-8">
                    <Link to="/" className="text-lg font-semibold hover:text-primary" onClick={() => { /* close sheet */ }}>Home</Link>
                    
                    {/* Shop Dropdown for Mobile */}
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between text-lg font-semibold hover:text-primary w-full">
                        Shop <ChevronRight className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem asChild><Link to="/product-category/cannabis">Flower</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to="/product-category/edibles">Edibles</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to="/gummies">Gummies</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to="/cartridges">Cartridges</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to="/pre-rolls">Pre-Rolls</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to="/product-category/concentrates">Concentrates</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to="/drinks">Drinks</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to="/merch">Merch</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to="/">Shop All Products</Link></DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* About Us Dropdown for Mobile */}
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between text-lg font-semibold hover:text-primary w-full">
                        About Us <ChevronRight className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem asChild><Link to="/about-us">Our Story</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to="/our-history">Our History</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link to="/reviews">Reviews</Link></DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Link to="/faq" className="text-lg font-semibold hover:text-primary" onClick={() => { /* close sheet */ }}>FAQ</Link>
                    <Link to="/points-rewards" className="text-lg font-semibold hover:text-primary" onClick={() => { /* close sheet */ }}>Points & Rewards</Link>
                    <Link to="/contact-us" className="text-lg font-semibold hover:text-primary" onClick={() => { /* close sheet */ }}>Contact Us</Link>
                    <Link to="/" className="text-lg font-semibold text-destructive hover:text-destructive" onClick={() => { /* close sheet */ }}>On Sale</Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t bg-background hidden md:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-8 h-12 overflow-x-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="whitespace-nowrap gap-2">
                    <Grid2x2 className="h-4 w-4" />
                    Shop
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-background z-50">
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/product-category/cannabis" className="w-full">
                      Flower
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/product-category/edibles" className="w-full">
                      Edibles
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/gummies" className="w-full">
                      Gummies
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/cartridges" className="w-full">
                      Cartridges
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/pre-rolls" className="w-full">
                      Pre-Rolls
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/product-category/concentrates" className="w-full">
                      Concentrates
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/drinks" className="w-full">
                      Drinks
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/merch" className="w-full">
                      Merch
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Shop All Products
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="whitespace-nowrap gap-2">
                    About Us
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-background z-50">
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/about-us" className="w-full">
                      Our Story
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/our-history" className="w-full">
                      Our History
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/reviews" className="w-full">
                      Reviews
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="sm" className="whitespace-nowrap" asChild>
                <Link to="/faq">FAQ</Link>
              </Button>
              <Button variant="ghost" size="sm" className="whitespace-nowrap" asChild>
                <Link to="/points-rewards">Points & Rewards</Link>
              </Button>
              <Button variant="ghost" size="sm" className="whitespace-nowrap" asChild>
                <Link to="/contact-us">Contact Us</Link>
              </Button>
              <div className="ml-auto">
                <Button variant="ghost" size="sm" className="text-destructive font-medium">
                  On Sale
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;