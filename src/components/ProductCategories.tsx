import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Flower",
    image: "public/img/home/flower.png"
  },
  {
    title: "Pre-Rolls",
    image: "public/img/home/preRolls.png"
  },
  {
    title: "Edibles",
    image: "public/img/home/edibles.png"
  },
    {
        title: "Drinks",
        image: "public/img/home/drinks.png"
    },
    {
        title: "Vapes",
        image: "public/img/home/vapes.png"
    },
];

const ProductCategories = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* First Category Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {categories.map((category, index) => (
              <div
                key={index}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-y-4 items-center justify-center p-3">
                    <div className="size-28 rounded-lg overflow-hidden flex-shrink-0" style={{ backgroundColor:'#f0f0f0' }}>
                        <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <Button
                      variant="hero"
                      className="underline"
                      onClick={() => navigate('/product-category/cannabis')}
                    >
                        {category.title}
                    </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategories;