import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/points-hero-bg.jpg";
import bbPointsReview from "@/assets/bb-points-review.jpg";
import referFriendBanner from "@/assets/refer-friend-banner.jpg";

const PointsRewards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-white/90 text-sm font-medium mb-2 uppercase tracking-wider">Bulk Buddy</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">POINTS & PROMOTIONS</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            If you're looking for extra savings, this is the right place! Up to 40% OFF + Earn Points for Reviews & Referrals.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {/* One Standard Low Wholesale Pricing */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">One Standard Low Wholesale Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            Our selection of wholesale weed includes both dried flowers and concentrates and more high-quality cannabis strains.
          </p>
        </div>

        {/* Two Images Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <img src={bbPointsReview} alt="50 BB Point Review a product" className="w-full rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={referFriendBanner} alt="Refer a Friend Program" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>

        {/* BB Points Section */}
        <div className="mb-16">
          <div className="flex items-start gap-6 mb-8">
            <span className="text-5xl font-light text-primary">01.</span>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-3xl font-bold">BB Points</h3>
                <p className="text-sm text-muted-foreground">Shop at BulkBuddy to collect points for those rainy days.</p>
              </div>
              <div className="space-y-3">
                <p className="text-foreground">
                  Every dollar you spend gets you 1 BB Point. Every 100 points will get you $1 off your purchase.
                </p>
                <p className="text-foreground">
                  Earn 50 BB Points for every product you review.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Refer A Friend Section */}
        <div className="mb-16">
          <div className="flex items-start gap-6">
            <span className="text-5xl font-light text-primary">02.</span>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-6">Refer A Friend Program</h3>
              <p className="text-foreground">
                We firmly believe all your friends & family will benefit from shopping at Bulk Buddy. That's why we're offering $15 for each referral that completes an order.{" "}
                <a href="#" className="text-primary hover:underline">Simply click here to find out more.</a>
              </p>
            </div>
          </div>
        </div>

        {/* Mix & Match Section */}
        <div className="mb-16">
          <div className="flex items-start gap-6">
            <span className="text-5xl font-light text-primary">03.</span>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-8">Mix & Match to Save up to 46%</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="flowers" className="border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="text-primary hover:no-underline">
                    Mix & Match Flowers Save up to 45% OFF
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-muted-foreground pt-2">
                      <p>45% OFF 8+ Ounces 35% OFF 3+ Ounces</p>
                      <p>15% OFF 2+ Ounces</p>
                      <p>15% OFF 4+ Quarter Pounds</p>
                      <p>10% OFF 2+ Quarter Pounds</p>
                      <p>7.5% OFF 2+ Half Pounds</p>
                      <p className="text-sm italic">(Only Applicable With Flower Products)</p>
                      <Button variant="link" className="text-primary p-0 h-auto">Shop Now</Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="white-tips" className="border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    Mix & Match White Tips Carts Save up to 46% OFF
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-muted-foreground pt-2">
                      <p>Save up to 46% when you mix and match White Tips Carts.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="keo" className="border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    Mix & Match Keo Disposables Save up to 46% OFF
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-muted-foreground pt-2">
                      <p>Save up to 46% when you mix and match Keo Disposables.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shatter" className="border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    Mix & Match Shatter Save up to 30% OFF
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-muted-foreground pt-2">
                      <p>Save up to 30% when you mix and match Shatter products.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="budder" className="border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    Mix & Match Budder Save up to 25% OFF
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-muted-foreground pt-2">
                      <p>Save up to 25% when you mix and match Budder products.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="live-resin" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    Mix & Match Live Resin Save up to 25% OFF
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-muted-foreground pt-2">
                      <p>Save up to 25% when you mix and match Live Resin products.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PointsRewards;
