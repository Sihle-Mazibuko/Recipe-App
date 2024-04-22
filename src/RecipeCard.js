import React from "react";
import "./RecipeCard.css";
import { ForkKnife, Leaf, Check, Clock, Heart } from "phosphor-react";

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
        <button className="heart-button">
          <Heart size={30} />
        </button>
      </section>
    </article>
  );
}

/*
this component is responsible for making each individual recipe card
the two props taken here are 
recipe = getting all the data from the recipes in the json object 
onClick = handling click events on the card


within the function various parts of the card are being generated such as the name, icons, and the dietary restriction for the recipe
*/

export default RecipeCard;
