import RecipeShowcaseCard from "./recipe-showcase-card";

const RecipeShowcase = () => {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2 ">
      <RecipeShowcaseCard
        className="recipe-showcase-bg-1 -mb-px md:-mr-px"
        key={1}
        title="recipes"
        text="Bolognese Spaghetti"
        label="details"
        href="/receipts/1"
      />
      <RecipeShowcaseCard
        className="recipe-showcase-bg-2"
        key={2}
        title="recipes"
        text="Pasta Salad with “Bizim Sufre” Mayonnaise"
        label="details"
        href="/receipts/2"
      />
    </section>
  );
};

export default RecipeShowcase;
