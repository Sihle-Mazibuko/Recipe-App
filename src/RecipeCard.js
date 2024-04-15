import React from "react";

function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <h3>
        {recipe.name}
        <p>Preparation Time: {recipe.prepTime}</p>
        <p>
          Dietary Restriction:{" "}
          {recipe.vegetarian ? "Vegetarian" : "Non-vegetarian"}
        </p>
        <p> Meal Time: {recipe.mealTime.join("", "")}</p>
      </h3>
    </article>
  );
}

export default RecipeCard;
