import Header from "@/components/sections/header";
import HomeHero from "@/components/sections/home-hero";
import ProductShowcase from "@/components/sections/product-showcase";
import RecipeShowcase from "@/components/sections/recipe-showcase";

const Home = () => {
  return (
    <main>
      <Header className="bg-transparent"/>
      <HomeHero />
      <RecipeShowcase />
      <ProductShowcase />
    </main>
  );
};

export default Home;
