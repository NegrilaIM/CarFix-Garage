import React from "react";
import "../Header/NavBar.scss";

function NavBar() {
  return (
    <div className="nav-bar">
        <a href="#program">
        CarFix Garage
        </a>
      <nav className="nav">
        <a href="#service">Service</a>
        <a href="#spalatorie">Spalatorie</a>
        <a href="#parteneri">Vulcanizare</a>
      </nav>
    </div>
  );
}

export default NavBar;
