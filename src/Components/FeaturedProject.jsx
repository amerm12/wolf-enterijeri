import React from 'react';
import './FeaturedProjects.css';
import { useNavigate } from 'react-router-dom';

function FeaturedProject(props) {

    const navigate = useNavigate();

    function viewDetails(projectID) {
        navigate('/project-details', { state: { projectID } });
    }

    return (
        <div className="featured-project">
            <img src={props.imageSrc} alt={props.imageAlt} />
            <div className="imgOverlay">
                <p className="text" onClick={() => viewDetails(props.projectID)}>Pogledaj Detaljnije</p>
            </div>    
        </div>
    );
}

export default FeaturedProject;
