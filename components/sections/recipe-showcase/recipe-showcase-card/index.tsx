import RecipeShowcaseCardProps from "@/types/recipe-showcase-card";
import Link from "next/link";


const RecipeShowcaseCard = ({ href, title, text, label, className }: RecipeShowcaseCardProps) => {
  return (
    <Link
      href={href}
      className={`group/item py-15 md:py-20 px-10 lg:px-20 flex flex-col justify-between h-full ${className}`}
    >
      <div className="flex flex-col gap-y-1 sm:gap-y-2">
        <h2 className="capitalize text-lg xs:text-xl md:text-2xl lg:text-4xl font-medium text-white">
          {title}
        </h2>
        <p className="uppercase text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          {text}
        </p>
      </div>
      <div className="group-hover/item:bg-white group-hover/item:text-black transition-all duration-300 w-24 h-10 md:w-36 md:h-12 flex items-center justify-center border border-white bg-transparent rounded-sm font-medium text-white text-lg tracking-wide capitalize">
        {label}
      </div>
    </Link>
  );
};

export default RecipeShowcaseCard;
