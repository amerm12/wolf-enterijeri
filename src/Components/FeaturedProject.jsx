import React from 'react';
import './FeaturedProjects.css';
import { useNavigate } from 'react-router-dom';

function FeaturedProject(props) {

    const navigate = useNavigate();

    function viewDetails(projectID) {
        navigate('/project-details', { state: { projectID } });
        console.log("a");
    }

    return (
        <div className="featured-project">
            <div className="featured-project-img">
                <img src={props.imageSrc} alt={props.imageAlt} />
                <div className="imgOverlay">
                    {/* Corrected onClick attribute */}
                    <p className="text" onClick={() => viewDetails(props.projectID)}>Pogledaj Detaljnije</p>
                </div>
            </div>
            <div className="featured-project-info">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default FeaturedProject;
