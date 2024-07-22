import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import './ProjectDetails.css';

function ProjectDetails() {
    
    const importImages = (r) => {
        return r.keys().map((item) => {
            const img = r(item);
            return {
                original: img,
                thumbnail: img,
            };
        });
    };

    const images1 = importImages(require.context('../assets/projekt1', false, /\.(jpg|jpeg|png)$/));
    const images2 = importImages(require.context('../assets/projekt2', false, /\.(jpg|jpeg|png)$/));
    const images3 = importImages(require.context('../assets/projekt3', false, /\.(jpg|jpeg|png)$/));
    const images4 = importImages(require.context('../assets/projekt4', false, /\.(jpg|jpeg|png)$/));
    const images5 = importImages(require.context('../assets/projekt5', false, /\.(jpg|jpeg|png)$/));
    const images6 = importImages(require.context('../assets/projekt6', false, /\.(jpg|jpeg|png)$/));
    const images7 = importImages(require.context('../assets/projekt7', false, /\.(jpg|jpeg|png)$/));
    const otherImages = importImages(require.context('../assets/otherProjects', false, /\.(jpg|jpeg|png)$/));

    let images;

    const location = useLocation();
    const projectID = location.state.projectID;

    switch (projectID) {
        case "proj1":
            images = images1;
            break;
        case "proj2":
            images = images2;
            break;
        case "proj3":
            images = images3;
            break;
        case "proj4":
            images = images4;
            break;
        case "proj5":
            images = images5;
            break;
        case "proj6":
            images = images6;
            break;
        case "proj7":
            images = images7;
            break;
        case "other":
            images = otherImages;
            break;
        default:
            images = [];
    }

    return (
        <div className="project-details">
            <ImageGallery items={images} />;      
        </div>
    );
}

export default ProjectDetails;
