import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="menu-item">All</li>
        <li className="menu-item">
          Dietary Restrictions
          <ul className="submenu">
            <li className="submenu-item">Vegetarian</li>
            <li className="submenu-item">Lactose-Free</li>
          </ul>
        </li>
        <li className="menu-item">
          Time of Day
          <ul className="submenu">
            <li className="submenu-item">Breakfast</li>
            <li className="submenu-item">Lunch</li>
            <li className="submenu-item">Dinner</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
