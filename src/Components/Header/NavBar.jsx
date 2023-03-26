import React from "react";
import "../Header/NavBar.scss";

function NavBar() {
  return (
    <div className="nav-bar">
        <span>
            CarFix Garage
        </span>
      <nav className="nav">
        <a href="#Service">Service</a>
        <a href="#Spalatorie">Spalatorie</a>
        <a href="Vulcanizare">Vulcanizare</a>
      </nav>
    </div>
  );
}

export default NavBar;
