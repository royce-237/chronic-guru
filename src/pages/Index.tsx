import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import ProductCategories from "@/components/ProductCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
        <ProductCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
