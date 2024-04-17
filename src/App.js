import React, { useState } from "react";
import "./App.css";
import "./Foot.css";
import RecipeList from "./RecipeList";
import recipeData from "./recipes.json";
import NavBar from "./NavBar";
import LargeRecipeCard from "./LargeRecipeCard";

function App() {
  // these state hooks handle searching for recipes, filtering and favouriting
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filter, setFilter] = useState("all");
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  // this function handles toggling the "favourited" property of a recipe
  const handleFavouriteToggle = (recipeName) => {
    const updatedRecipes = recipeData.recipes.map((recipe) => {
      if (recipe.name === recipeName) {
        return { ...recipe, favourited: !recipe.favourited };
      }
      return recipe;
    });
    setFavouriteRecipes(updatedRecipes.filter((recipe) => recipe.favourited));
  };

  // this filters recipes based on the search input and filter option
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

  // handles search input and output of changing the recipes displayed
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // handles clicking on small recipe cards to show large recipe card
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // handles closing large recipe card
  const handleCloseLargeCard = () => {
    setSelectedRecipe(null);
  };

  // handles the filter change
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
        <NavBar
          onFilterChange={handleFilterChange}
          favouriteRecipes={favouriteRecipes}
        />
      </header>
      <main>
        {selectedRecipe ? (
          <LargeRecipeCard
            recipe={selectedRecipe}
            onClose={handleCloseLargeCard}
            onFavoriteToggle={handleFavouriteToggle}
          />
        ) : (
          <RecipeList
            recipes={filteredRecipes}
            onRecipeClick={handleRecipeClick}
          />
        )}
      </main>
      {
        <footer>
          {/* <p>&copy; 2024 Easy Eats. All rights reserved.</p> */}
        </footer>
      }
    </div>
  );
}

/* 
the app component is the main component of the application.
not only does it display the actual application components and layout such as the header, navbar, main content and footer content
it manages the state of search query, selected recipe, filter option, and favourite recipes.
*/

export default App;
