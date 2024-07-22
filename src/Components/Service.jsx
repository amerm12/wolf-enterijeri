import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = ({ icon, title }) => {
    return (
        <div className="service">
            <FontAwesomeIcon icon = { icon } className = "icon" />
            <h2>{ title }</h2>
        </div>
    );
};

export default Service;