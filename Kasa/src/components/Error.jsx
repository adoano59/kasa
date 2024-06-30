import React from 'react'
import "../styles/error.css" 
function Error(props) {
    
    return (
        <> <div className='errorContent'>
        <div className="errorNumber">
        404
        </div>
        <div className='errorText'>
        Oups! La page que vous demandez n'existe pas.
        </div>
        <div className='errorBack'>
        <a href="/">Retourner sur la page d’accueil</a>
        </div>
        </div>
        </>)
    }
    export default Error