import React, { useState } from "react";
import "./NavBar.css";
import { CaretDown } from "phosphor-react";

function NavBar({ onFilterChange }) {
  // these state hooks handle showing the dietary and time of day menu options in the navbar menu filter
  const [showDietarySubmenu, setShowDietarySubmenu] = useState(false);
  const [showTimeOfDaySubmenu, setShowTimeOfDaySubmenu] = useState(false);

  //this function allows us to see or hide the  dietary submenu items
  const toggleDietarySubmenu = () => {
    setShowDietarySubmenu(!showDietarySubmenu);
    setShowTimeOfDaySubmenu(false);
  };

  //this function allows us to see or hide the  time of day submenu items
  const toggleTimeOfDaySubmenu = () => {
    setShowTimeOfDaySubmenu(!showTimeOfDaySubmenu);
    setShowDietarySubmenu(false);
  };

  //handles which menu filter option is seleted and applies that menu options selection to only show relevant recipes
  const handleFilterSelection = (filterOption) => {
    onFilterChange(filterOption);
  };

  //this handle this all menu option filter by reseting it and displaying each and every recipe in the array
  const handleAllClick = () => {
    onFilterChange("all");
  };

  // this handles clicks on a specific filter option and hides submenus
  const handleFilterClick = (filterOption) => {
    setShowDietarySubmenu(false);
    setShowTimeOfDaySubmenu(false);
    onFilterChange(filterOption);
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={handleAllClick}>All</li>
        <li onClick={toggleDietarySubmenu}>
          Dietary Restrictions <CaretDown className="dropdown-arrow" />
          {showDietarySubmenu && (
            <ul className="submenu">
              <li onClick={() => handleFilterSelection("vegetarian")}>
                Vegetarian
              </li>
              <li onClick={() => handleFilterSelection("lactoseFree")}>
                Lactose-Free
              </li>
            </ul>
          )}
        </li>
        <li onClick={toggleTimeOfDaySubmenu}>
          Time of Day <CaretDown className="dropdown-arrow" />
          {showTimeOfDaySubmenu && (
            <ul className="submenu">
              <li onClick={() => handleFilterSelection("breakfast")}>
                Breakfast
              </li>
              <li onClick={() => handleFilterSelection("lunch")}>Lunch</li>
              <li onClick={() => handleFilterSelection("dinner")}>Dinner</li>
            </ul>
          )}
        </li>
        <li
          className="menu-item"
          onClick={() => handleFilterClick("favourites")}
        >
          Favourites
        </li>
      </ul>
    </nav>
  );
}

/*
this function will return or make the actual navbar and display all the menu filter options
*/

export default NavBar;
