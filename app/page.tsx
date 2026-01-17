import HomeHero from "@/components/sections/home-hero";
import ProductShowcase from "@/components/sections/product-showcase";
import RecipeShowcase from "@/components/sections/recipe-showcase";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <RecipeShowcase />
      <ProductShowcase />
    </main>
  );
};

export default Home;
