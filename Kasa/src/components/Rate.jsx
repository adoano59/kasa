import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import "../styles/rate.css";

const Rate = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FontAwesomeIcon key={i} icon={faSolidStar} className='full-star' />);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={faRegularStar} className='empty-star' />);
        }
    }

    return <div className='star'>{stars}</div>;
};

export default Rate;
