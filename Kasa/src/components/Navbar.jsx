import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          borderBottom: isActive ? "#000000 solid 2px" : "",
        })}
      >
        Accueil
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          borderBottom: isActive ? "#000000 solid 2px" : "",
        })}
      >
        À propos
      </NavLink>
    </nav>
  );
}

export default Navbar;
