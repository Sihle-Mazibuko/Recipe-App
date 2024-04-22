import React, { useState } from "react";
import "./LargeCard.css";
import { XCircle } from "phosphor-react";

function LargeRecipeCard({ recipe, onClose, onFavoriteToggle }) {
  const [isFavourited, setIsFavourited] = useState(recipe.favourited); // state hook to used manage the favourited state

  const loremText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed hendrerit purus ut lacus malesuada, nec bibendum ligula lobortis. 
    Donec sollicitudin mi et eros tempor, vel efficitur urna condimentum. 
    Nulla facilisi. Vivamus feugiat, libero eget tincidunt vulputate, 
    dui sapien pharetra nisl, at venenatis lectus sem ac odio. 
    Phasellus vel tristique enim. Duis commodo ex id lorem posuere, 
    in eleifend libero commodo. Nullam eget consequat velit, in feugiat mi. 
    Integer quis nibh vitae ligula hendrerit vestibulum.
  `;

  // manages clicks that occur on the close button (closes the large card)
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="large-recipe-card">
      <button className="close-button" onClick={handleCloseClick}>
        <XCircle size={24} />
      </button>
      <h2>{recipe.name}</h2>
      <p>{recipe.vegetarian ? "Vegetarian" : "Not Vegetarian"}</p>
      <p>{recipe.lactoseFree ? "Lactose-Free" : "Contains Dairy"}</p>
      <p>Prep Time: {recipe.prepTime}</p>
      <p>Can be eaten during: {recipe.mealTime}</p>
      <p>Instructions: {loremText}</p>
    </div>
  );
}

/* LargeRecipeCard component returns a large card that has the details of a recipe.
it takes in the following props:
recipe= a object containing details of the recipe to be displayed.
onClose= a function to handle the closing of the large card.
onFavoriteToggle= a function to handle toggling the favourite state of the recipe.
*/

export default LargeRecipeCard;
