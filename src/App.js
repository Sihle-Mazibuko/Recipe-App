import React from "react";
import "./App.css";
import RecipeList from "./RecipeList";
import recipeData from "./recipes.json";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app-contain">
      <header>
        <h1>Easy Eats</h1>
        <NavBar /> {/*show navigation bar */}
      </header>
      <main>
        <RecipeList recipes={recipeData.recipes} />
      </main>
      <footer>
        <p>&copy; 2024 Easy Eats. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
