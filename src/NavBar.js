import React, { useState } from "react";
import "./NavBar.css";
import { CaretDown } from "phosphor-react";

function NavBar() {
  const [showDietarySubmenu, setShowDietarySubmenu] = useState(false);
  const [showTimeOfDaySubmenu, setShowTimeOfDaySubmenu] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <li>All</li>
        <li onClick={() => setShowDietarySubmenu(!showDietarySubmenu)}>
          Dietary Restrictions <CaretDown className="dropdown-arrow" />
          {showDietarySubmenu && (
            <ul className="submenu">
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Lactose-Free</li>
            </ul>
          )}
        </li>
        <li onClick={() => setShowTimeOfDaySubmenu(!showTimeOfDaySubmenu)}>
          Time of Day <CaretDown className="dropdown-arrow" />
          {showTimeOfDaySubmenu && (
            <ul className="submenu">
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
            </ul>
          )}
        </li>
        <li className="menu-item">Favourties</li>
      </ul>
    </nav>
  );
}

export default NavBar;
