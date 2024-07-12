import React from 'react'
import "../styles/banner.css"
function Banner(props) {

  return (
    <>
      <div className="banner">
        <img src={props.image} alt='Bannière' className="banner-image" />
        <h1 className="banner-title">{props.title}</h1>
      </div>
    </>)
}
export default Banner