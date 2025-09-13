import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    title: "Budget Electronics",
    subtitle: "Best Value",
    description: "Enjoy Quality Tech As Low As $29!",
    badge: "Best Value!",
    badgeColor: "bg-green-500",
    buttonText: "Shop Now →",
  },
  {
    title: "Premium Gadgets",
    subtitle: "Premium Quality",
    description: "We Offer Cutting-Edge Tech, Latest Models & More.",
    badge: "Premium Quality",
    badgeColor: "bg-blue-500",
    buttonText: "Shop Now →",
  },
  {
    title: "Home Essentials",
    subtitle: "Fresh & Delicious",
    description: "Shop From Kitchen Appliances, Home Decor & More.",
    badge: "Fresh & Delicious",
    badgeColor: "bg-orange-500",
    buttonText: "Shop Now →",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              
              <div className="relative p-8">
                <div className="mb-4">
                  <Badge className={`${category.badgeColor} text-white mb-3`}>
                    {category.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="group-hover:scale-105 transition-transform duration-200"
                >
                  {category.buttonText}
                </Button>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;