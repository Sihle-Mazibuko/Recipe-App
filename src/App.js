import React, { useState } from "react";
import "./App.css";
import "./Foot.css";
import RecipeList from "./RecipeList";
import recipeData from "./recipes.json";
import NavBar from "./NavBar";
import LargeRecipeCard from "./LargeRecipeCard";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filter, setFilter] = useState("all");

  // Filter recipes based on the search query and filter option
  const filteredRecipes = recipeData.recipes.filter((recipe) => {
    const nameMatches = recipe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (filter === "all") return nameMatches;
    if (filter === "vegetarian") return recipe.vegetarian && nameMatches;
    if (filter === "lactoseFree") return recipe.lactoseFree && nameMatches;
    if (filter === "breakfast")
      return recipe.mealTime.includes("Breakfast") && nameMatches;
    if (filter === "lunch")
      return recipe.mealTime.includes("Lunch") && nameMatches;
    if (filter === "dinner")
      return recipe.mealTime.includes("Dinner") && nameMatches;
    return nameMatches;
  });

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle recipe card click to show large card
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Handle close of large card
  const handleCloseLargeCard = () => {
    setSelectedRecipe(null);
  };

  // Handle filter change
  const handleFilterChange = (filterOption) => {
    setFilter(filterOption);
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
                placeholder="Browse Recipes..."
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
          </nav>
        </div>
        <NavBar onFilterChange={handleFilterChange} />
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
      {/* <footer>
        <p>&copy; 2024 Easy Eats. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;
