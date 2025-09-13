import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Help Section */}
        <div className="mb-12">
          <h3 className="font-bold text-lg text-card-foreground mb-6">Do You Need Help ?</h3>
          <p className="text-muted-foreground mb-6">We offer Chat & Email Support.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Chat Support */}
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Online Chat Support</h4>
                <p className="text-sm text-muted-foreground">Mon – Fri: 9am – 10pm PST</p>
                <p className="text-sm text-muted-foreground">Sat & Sun: 11am – 10pm PST</p>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Need help with your order?</h4>
                <p className="text-sm text-primary">info@bulkbuddy.co</p>
                <p className="text-sm text-muted-foreground">Response within 1-2 business days</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">Follow us on social media:</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Electronics */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Electronics</h4>
            <div className="space-y-2">
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Budget Electronics
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Premium Gadgets
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Smart Devices
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Gaming
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                View All Electronics
              </Button>
            </div>
          </div>

          {/* Home & Garden */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Home & Garden</h4>
            <div className="space-y-2">
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Kitchen Appliances
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Home Decor
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Garden Tools
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Storage
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                View All Home
              </Button>
            </div>
          </div>

          {/* Fashion */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Fashion</h4>
            <div className="space-y-2">
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Clothing
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Shoes
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Accessories
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Bags
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                View All Fashion
              </Button>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Useful Links</h4>
            <div className="space-y-2">
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                About Us
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                FAQ
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Contact Us
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                My Account
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground justify-start">
                Order Tracking
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Copyright 2024 © Bulk Buddy. All Rights Reserved.
          </p>
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