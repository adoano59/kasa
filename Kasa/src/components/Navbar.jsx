import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar