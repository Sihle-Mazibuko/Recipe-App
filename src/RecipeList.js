import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import LargeRecipeCard from "./LargeRecipeCard";

function RecipeList({ recipes }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showLargeCard, setShowLargeCard] = useState(false);

  // Event handler to handle clicks on recipe cards
  const handleRecipeClick = (recipe) => {
    console.log("Recipe clicked:", recipe); // Check if the function is triggered
    setSelectedRecipe(recipe);
    setShowLargeCard(true);
  };

  console.log("Selected recipe:", selectedRecipe); // Check the value of selectedRecipe
  console.log("Show large card:", showLargeCard); // Check the value of showLargeCard

  return (
    <article className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.name}
          recipe={recipe}
          onClick={() => handleRecipeClick(recipe)}
        />
      ))}
      {showLargeCard && selectedRecipe && (
        <LargeRecipeCard recipe={selectedRecipe} />
      )}
    </article>
  );
}

export default RecipeList;
