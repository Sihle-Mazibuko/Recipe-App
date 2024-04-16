import React from "react";
import "./RecipeCard.css";
import { ForkKnife, Leaf, Check, Heart } from "phosphor-react";

function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <section className="recipe-icon">
        <ForkKnife />
      </section>
      <section className="recipe-details">
        <h3>
          {recipe.name}
          <span className="heart-icon">
            <Heart />
          </span>
        </h3>

        {recipe.vegetarian ? ( // show leaf
          <p>
            <Leaf /> Vegetarian
          </p>
        ) : null}
        {recipe.lactoseFree ? null : ( // show cheese
          <p>
            <Check /> Contains Dairy
          </p>
        )}
      </section>
    </article>
  );
}

export default RecipeCard;
