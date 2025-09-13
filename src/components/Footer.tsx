import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-card-foreground">BulkBuddy</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for quality products at unbeatable prices. We deliver excellence with every order.
            </p>
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground">
                About Us
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground">
                FAQ
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground">
                Points & Rewards
              </Button>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Customer Service</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Mon-Fri: 9am-10pm PST</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">bulkbuddy@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Free shipping $150+</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get special offers and updates.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" />
              <Button variant="hero" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 BulkBuddy. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground">
              Privacy Policy
            </Button>
            <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-card-foreground">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;