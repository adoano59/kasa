import React from 'react'
import logoImage from '../../image/logo.png'
import "../styles/navbar.css" 

function Logo() {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo de l'application" />
    </div>
  )
}

export default Logo