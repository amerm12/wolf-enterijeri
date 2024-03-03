// Project.jsx
import React from 'react';
import '../Components/Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function Project({ image, title, type, location, date, viewDetails }) {
    return (
        <div className = "project">
            <img src = { image } alt = "slika projekta" />
            <div className = "project-info">
                <h2 className="project-title">{ title }</h2>
                <div className = "project-info-container">
                    <div className = "project-type">
                        <FontAwesomeIcon icon={ faBuilding } className = "project-icon" />
                        <p>{ type }</p>
                    </div>

                    <div className = "project-location">
                        <FontAwesomeIcon icon={ faLocationDot } className = "location-icon" />
                        <p>{ location }</p>
                    </div>

                    <div className = "project-date">
                        <FontAwesomeIcon icon={ faCalendarDays } className = "time-icon" />
                        <p>{ date }</p>
                    </div>
                </div>
                <button className = "view-details-button" onClick={ viewDetails }>Pogledaj Detaljnije</button>
            </div>
        </div>
    );
}

export default Project;
