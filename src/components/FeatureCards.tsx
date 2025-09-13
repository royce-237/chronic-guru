import { Shield, Tag, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Online Payments",
    description: "We accept all major payment methods",
  },
  {
    icon: Tag,
    title: "Sales & Discounts",
    description: "There's always something on sale!",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "We test every product",
  },
  {
    icon: Truck,
    title: "Free Express Shipping",
    description: "On All Orders $175+",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 rounded-xl bg-card border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;