import React from 'react'
import logoImage from '../../image/logo.png' 

function Logo() {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo de l'application" />
    </div>
  )
}

export default Logo