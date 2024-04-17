// App.js

import React, { useState } from "react";
import "./App.css";
import "./Foot.css";
import RecipeList from "./RecipeList";
import recipeData from "./recipes.json";
import NavBar from "./NavBar";
import LargeRecipeCard from "./LargeRecipeCard"; // Import LargeRecipeCard component

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to store the selected recipe

  // Filter recipes based on the search query
  const filteredRecipes = recipeData.recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle click on recipe card to select the recipe
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe); // Set the selected recipe
  };

  return (
    <div className="app-container">
      <header>
        <div className="header-content">
          <h1>Easy Eats</h1>
          <nav className="search-bar">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
          </nav>
        </div>
        <NavBar /> {/* show navigation bar */}
      </header>
      <main>
        {selectedRecipe ? ( // Render the large card if a recipe is selected
          <LargeRecipeCard recipe={selectedRecipe} />
        ) : (
          <RecipeList
            recipes={filteredRecipes}
            onRecipeClick={handleRecipeClick} // Pass the click handler to RecipeList
          />
        )}
      </main>
      <footer>
        <p>&copy; 2024 Easy Eats. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
