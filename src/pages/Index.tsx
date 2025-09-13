import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import ProductCategories from "@/components/ProductCategories";
import ProductGrid from "@/components/ProductGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
        <ProductCategories />
        <ProductGrid />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
