import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import mainImage from "@/assets/main.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Mix & Match
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Save Up to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  45% OFF
                </span>
              </h1>
              
              <div className="space-y-1 text-lg text-muted-foreground">
                <p>45% OFF 8+ Items</p>
                <p>35% OFF 3+ Items</p>
                <p>15% OFF 2+ Items</p>
                <p>15% OFF 4+ Bundles</p>
                <p>10% OFF 2+ Bundles</p>
                <p>7.5% OFF 2+ Premium Sets</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="shadow-2xl"
                onClick={() => navigate('/product-category/cannabis')}
              >
                Shop Now →
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              *Only Applicable With Selected Products*
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src={mainImage}
              alt="Premium Products"
              className="relative w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;