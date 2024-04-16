import React from "react";
import "./App.css";
import "./Foot.css";
import RecipeList from "./RecipeList";
import recipeData from "./recipes.json";
import NavBar from "./NavBar";
import { MagnifyingGlass } from "phosphor-react";

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="header-content">
          <h1>Easy Eats</h1>
          <nav className="search-bar">
            <div className="search-container">
              <input type="text" placeholder="Search"></input>
              <MagnifyingGlass className="search-icon" />
            </div>
          </nav>
        </div>
        <NavBar /> {/* show navigation bar */}
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
