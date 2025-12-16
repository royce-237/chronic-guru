import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Facebook, Twitter, Send, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Help Section */}
        <div className="grid lg:grid-cols-[1fr_4fr] gap-12 mb-12">
          {/* Left - Help */}
          <div>
            <h3 className="font-bold text-lg text-card-foreground mb-3">Do You Need Help ?</h3>
            <p className="text-muted-foreground mb-6 text-sm">We offer Chat & Email Support.</p>
            
            <div className="space-y-6">
              {/* Online Chat Support */}
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Mon – Fri: 9am – 10pm PST</p>
                  <p className="text-sm text-muted-foreground mb-2">Sat & Sun: 11am – 10pm PST</p>
                  <h4 className="font-semibold text-card-foreground text-base">Online Chat Support</h4>
                </div>
              </div>

              {/* Email Support */}
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Need help with your order?</p>
                  <p className="text-sm font-medium text-card-foreground">info@chronicguru.co</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Follow us on social media:</p>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right - Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Cannabis */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Cannabis</h4>
              <div className="space-y-2">
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  $39-$129/oz (Budget Buds)
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Craft Cannabis Flowers
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  AAAA Weed
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  AAA Weed
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  AA Weed
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Indica
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Sativa
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Hybrid
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Pre-rolls
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Shake / trim
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  View All Cannabis
                </Button>
              </div>
            </div>

            {/* Concentrates */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Concentrates</h4>
              <div className="space-y-2">
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Shatter
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Budder
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  THCa Diamond
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Distillate
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Hash
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Kief
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Vapes
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  View All Concentrates
                </Button>
              </div>
            </div>

            {/* Edibles & Accessories */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Edibles</h4>
              <div className="space-y-2">
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Candy
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Capsules
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Chocolate & Baked Goods
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Tinctures & Oils
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  View All Edibles
                </Button>
              </div>

              <h4 className="font-semibold text-card-foreground mb-4 mt-6">Accessories</h4>
              <div className="space-y-2">
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Rolling Paper & Filters Tips
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  View All Accessories
                </Button>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Useful Links</h4>
              <div className="space-y-2">
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  About Us
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  FAQ
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Blog
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Contact Us
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Refer A Friend
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Shopping cart
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Cart
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Checkout
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  My Account
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  My Orders
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Order Tracking
                </Button>
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  Wishlist
                </Button>
              </div>
            </div>

            {/* CBD */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">CBD</h4>
              <div className="space-y-2">
                <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-card-foreground justify-start">
                  View All CBD
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Copyright 2024 © Chronic Guru. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-sm">
                <img src="/paiement/applePay.png" alt="Apple Pay" className="h-6" />
                <img src="/paiement/bitcoin.png" alt="Bitcoin" className="h-6" />
                <img src="/paiement/chime.png" alt="Chime" className="h-6" />
                <img src="/paiement/zelle.png" alt="Zelle" className="h-6" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground">
              Terms and Conditions
            </Button>
            <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground">
              Privacy Policy
            </Button>
            <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground">
              Shipping Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;