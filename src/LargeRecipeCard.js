import React from "react";
import "./LargeCard.css"; // Import the CSS file for styling

function LargeRecipeCard({ recipe }) {
  // Sample Lorem Ipsum text for instructions
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

  return (
    <div className="large-recipe-card">
      <h2>{recipe.name}</h2>
      <p>{recipe.vegetarian ? "Vegetarian" : "Not Vegetarian"}</p>
      <p>{recipe.lactoseFree ? "Lactose-Free" : "Contains Dairy"}</p>
      <p>Prep Time: {recipe.prepTime}</p>
      <p>Instructions: {recipe.instructions || loremText}</p>
    </div>
  );
}

export default LargeRecipeCard;
