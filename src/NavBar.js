import React, { useState } from "react";
import "./NavBar.css";
import { CaretDown } from "phosphor-react";

function NavBar({ onFilterChange }) {
  const [showDietarySubmenu, setShowDietarySubmenu] = useState(false);
  const [showTimeOfDaySubmenu, setShowTimeOfDaySubmenu] = useState(false);

  const toggleDietarySubmenu = () => {
    setShowDietarySubmenu(!showDietarySubmenu);
    setShowTimeOfDaySubmenu(false); // Close other submenu when opening this one
  };

  const toggleTimeOfDaySubmenu = () => {
    setShowTimeOfDaySubmenu(!showTimeOfDaySubmenu);
    setShowDietarySubmenu(false); // Close other submenu when opening this one
  };

  const handleFilterSelection = (filterOption) => {
    onFilterChange(filterOption);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>All</li>
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
        <li className="menu-item">Favourites</li>
      </ul>
    </nav>
  );
}

export default NavBar;
