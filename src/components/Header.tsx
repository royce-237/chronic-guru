import { Search, ShoppingCart, User, Menu, Grid2x2, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-sm">
        <p>
          Free Express Shipping on orders $150+ • Online Chat Support Mon-Fri: 9am-10pm PST •{" "}
          <span className="font-semibold">Use code BULK5 for 5% off first order</span>
        </p>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
</Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 relative">
              <Input
                type="search"
                placeholder="Search for products, categories or brands..."
                className="w-full pl-4 pr-12 h-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Sign In</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>

              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t bg-background">
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
                  <DropdownMenuItem className="cursor-pointer">
                    Merch
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