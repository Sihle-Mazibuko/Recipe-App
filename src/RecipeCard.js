import React from "react";
import "./RecipeCard.css";
import { ForkKnife, Leaf, Check, Clock, Heart } from "phosphor-react"; // Import icons

function RecipeCard({ recipe, onClick }) {
  return (
    <article className="recipe-card" onClick={onClick}>
      <section className="recipe-icon">
        <ForkKnife />
      </section>
      <section className="recipe-details">
        <h3>{recipe.name}</h3>
        <p>
          <Clock /> {recipe.prepTime}
        </p>
        {recipe.vegetarian ? (
          <p>
            <Leaf /> Vegetarian
          </p>
        ) : null}
        {recipe.lactoseFree ? null : (
          <p>
            <Check /> Contains Dairy
          </p>
        )}
      </section>
    </article>
  );
}

export default RecipeCard;
