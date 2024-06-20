import React from 'react'
import "../styles/card.css" 
function Card(props) {
  
    return (
      <> 
      <div className="card">
      <img src={props.element.cover} alt={props.element.title} className="card-image" />
      <h1 className= "card-title">{props.element.title}</h1>
      </div>
      </>)
}
export default Card