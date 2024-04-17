import React, { useState } from "react";
import "./LargeCard.css"; // Import the CSS file for styling
import { XCircle, Heart } from "phosphor-react"; // Import the CircleX icon

function LargeRecipeCard({ recipe, onClose, onFavoriteToggle }) {
  const [isFavourited, setIsFavourited] = useState(recipe.favourited); // State hook to manage the favourited state

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

  // Handle click on close button
  const handleCloseClick = () => {
    onClose();
  };

  // Handle click on favorite button
  const handleFavoriteClick = () => {
    const updatedFavourited = !isFavourited; // Toggle the favourited state
    setIsFavourited(updatedFavourited); // Update the state

    // Call the onFavoriteToggle function passed from the parent component
    onFavoriteToggle(recipe, updatedFavourited);
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
      <p>Instructions: {loremText}</p>
      <button className="favorite-button" onClick={handleFavoriteClick}>
        <Heart size={24} color={isFavourited ? "#ff6347" : "gray"} />
      </button>
    </div>
  );
}

export default LargeRecipeCard;
