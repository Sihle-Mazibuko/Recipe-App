import React from "react";
import RecipeCard from "./RecipeCard";
import { Plate } from "phosphor-react";

function RecipeList({ recipes }) {
  return (
    <article className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.name} recipe={recipe} />
      ))}
    </article>
  );
}

export default RecipeList;
