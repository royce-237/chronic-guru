import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              KEO 2ML, 3ML or 6ML Premium Devices
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Save Up to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  30% OFF
                </span>
              </h1>
              
              <div className="space-y-1 text-lg text-muted-foreground">
                <p>Buy 3+ = 5% OFF</p>
                <p>Buy 5+ = 7% OFF</p>
                <p>Buy 10+ = 15% OFF</p>
                <p>Buy 25+ = 20% OFF</p>
                <p>Buy 50+ = 30% OFF</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="shadow-2xl">
                Shop Now →
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              *Discount will be calculated at cart page*
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