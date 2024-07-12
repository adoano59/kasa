import '../styles/fiche.css';
import React, { useState } from 'react';

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="dropdown">
            <div className="dropdown-button" onClick={toggleDropdown}>
                {props.titleDetails}
                <span className={`chevron ${isOpen ? 'open' : ''}`}>
                    ^
                </span>
            </div>
            {isOpen && (
                <div className="dropdown-content">
                    {Array.isArray(props.details) ? (
                        <ul>
                            {props.details.map((el, index) => (
                                <li key={index}>{el}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{props.details}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropdown;