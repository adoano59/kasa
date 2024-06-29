import React from 'react'
import "../styles/card.css" 
function Card(props) {
  
    return (
      <> 
      <div className="card">
      <a href={`logement/${props.element.id}`}> <img src={props.element.cover} alt={props.element.title} className="card-image" />
      <h1 className= "card-title">{props.element.title}</h1>
      </a>
      </div>
      </>)
}
export default Card