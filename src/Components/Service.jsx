import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = ({ icon, title, paragraph }) => {
    return (
        <div className="service">
            <FontAwesomeIcon icon = { icon } className = "icon" />
            <div className = "service-info">
                <h2>{ title }</h2>
                <p>{ paragraph }</p>
            </div>
        </div>
    );
};

export default Service;