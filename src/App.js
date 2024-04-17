import React, { useState } from "react";
import "./App.css";
import "./Foot.css";
import RecipeList from "./RecipeList";
import recipeData from "./recipes.json";
import NavBar from "./NavBar";
import { MagnifyingGlass } from "phosphor-react";
import LargeRecipeCard from "./LargeRecipeCard"; // Import LargeRecipeCard component

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Filter recipes based on the search query
  const filteredRecipes = recipeData.recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle click on recipe card to show large card
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Handle close of large card
  const handleCloseLargeCard = () => {
    setSelectedRecipe(null);
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
              <MagnifyingGlass className="search-icon" />
            </div>
          </nav>
        </div>
        <NavBar /> {/* show navigation bar */}
      </header>
      <main>
        {selectedRecipe ? (
          <LargeRecipeCard
            recipe={selectedRecipe}
            onClose={handleCloseLargeCard}
          />
        ) : (
          <RecipeList
            recipes={filteredRecipes}
            onRecipeClick={handleRecipeClick}
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
