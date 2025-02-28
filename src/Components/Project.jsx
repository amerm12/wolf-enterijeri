// Project.jsx
import React from 'react';
import '../Components/Project.css';


function Project({ image, viewDetails }) {
    return (
        <div className = "project" onClick={ viewDetails }>
            <img src = { image } alt = "slika projekta" />
        </div>
    );
}

export default Project;
