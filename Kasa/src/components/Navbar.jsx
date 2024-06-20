import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css" 

function Navbar() {
  return (
  
    <nav className="navbar">
     
       
          <Link to="/">Accueil</Link>
      
    
          <Link to="/about">À propos</Link>
        
    
    </nav>
  )
}

export default Navbar