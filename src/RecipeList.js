import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onRecipeClick }) {
  return (
    <article className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.name}
          recipe={recipe}
          onClick={() => onRecipeClick(recipe)}
        />
      ))}
    </article>
  );
}

export default RecipeList;
