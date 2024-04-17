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

/*
This component is responsible for showing the list of recipe cards.
The function "RecipeList" recieves two props namely:

Recipes = this is an array of the all the recipes found in the json object
onRecipeClick = this a function that is responsible to handling click events that occur when clicking on a recipe card
*/
