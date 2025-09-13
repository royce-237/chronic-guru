import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Mix & Match
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Save Up to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  45% OFF
                </span>
              </h1>
              
              <div className="space-y-2 text-lg text-muted-foreground">
                <p>45% OFF 8+ Items</p>
                <p>35% OFF 3+ Items</p>
                <p>15% OFF 2+ Items</p>
                <p className="text-sm">(Only Applicable With Select Products)</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="shadow-2xl">
                Shop Now →
              </Button>
              <Button variant="outline" size="xl">
                View Categories
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              *Excluding special offers, bundles & premium items*
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Premium Products"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;