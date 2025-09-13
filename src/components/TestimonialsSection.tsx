import { Star, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Kirk",
    date: "31 July 2025",
    rating: 5,
    text: "The best! Insane bulk prices! Great selection of products available. The bulk discounts are AMAZING! Fast free shipping. My order was...",
    verified: true,
  },
  {
    id: 2,
    name: "Adam Tenszen",
    date: "3 July 2025",
    rating: 5,
    text: "Always an excellent product. Have made over 100 orders and only one shipping delay thus far. Can't beat the pricing!",
    verified: true,
  },
  {
    id: 3,
    name: "Garrett",
    date: "9 April 2025",
    rating: 5,
    text: "Best by far! Best overall sight by far, nobody could beat the price and consistency quality!",
    verified: true,
  },
  {
    id: 4,
    name: "Sam Boulbol",
    date: "31 March 2025",
    rating: 5,
    text: "BEST MOM EVER this is by far the best mail order experience ever, hands down. If you don't order from BB than F*ck You...",
    verified: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Rewards & Reviews Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Rewards Card */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm">
            <div className="mb-4">
              <Badge className="bg-orange-500 text-white mb-3">
                Get Free Weed
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Rewards & Promos
            </h3>
            <p className="text-muted-foreground mb-6">
              Bulk Buddy offers many different ways for you to save.
            </p>
            
            {/* BB Points */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">50 BB Point</div>
                <div className="text-sm text-muted-foreground">Review a product</div>
              </div>
            </div>

            <Button variant="outline">
              Learn More →
            </Button>
          </div>

          {/* Product Reviews Card */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm relative overflow-hidden">
            <div className="mb-4">
              <Badge className="bg-yellow-500 text-white mb-3">
                Before You Purchase
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Product Reviews
            </h3>
            <p className="text-muted-foreground mb-6">
              Learn what others say to have the best purchasing experience.
            </p>

            <Button variant="outline">
              Read Reviews →
            </Button>

            {/* Decorative stars */}
            <div className="absolute top-4 right-4 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Index Reviews */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Trust Index Reviews</h3>
              <p className="text-muted-foreground">Shared experiences from customers from all over Canada!</p>
            </div>
            <Button variant="outline">
              Write a Review →
            </Button>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-xl p-6 border shadow-sm"
              >
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-card-foreground leading-relaxed">
                  {testimonial.text}
                </p>

                {testimonial.text.includes("...") && (
                  <Button variant="link" className="p-0 h-auto text-xs mt-2">
                    Read more
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;