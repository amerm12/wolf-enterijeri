import React, { useState, useEffect } from 'react';
import './ProjectDetails.css';
import { useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

function ProjectDetails() {
    
    const images1 = require.context('../assets/projekt1', false, /\.(jpg|jpeg|png)$/);
    const project1Images = images1.keys().map(images1);

    const images2 = require.context('../assets/projekt2', false, /\.(jpg|jpeg|png)$/);
    const project2Images = images2.keys().map(images2);

    const images3 = require.context('../assets/projekt3', false, /\.(jpg|jpeg|png)$/);
    const project3Images = images3.keys().map(images3);

    const images4 = require.context('../assets/projekt4', false, /\.(jpg|jpeg|png)$/);
    const project4Images = images4.keys().map(images4);

    const images5 = require.context('../assets/projekt5', false, /\.(jpg|jpeg|png)$/);
    const project5Images = images5.keys().map(images5);

    const images6 = require.context('../assets/projekt6', false, /\.(jpg|jpeg|png)$/);
    const project6Images = images6.keys().map(images6);

    const images7 = require.context('../assets/otherProjects', false, /\.(jpg|jpeg|png)$/);
    const otherImages = images7.keys().map(images7);

    let images;

    const location = useLocation();
    const projectID = location.state.projectID;

    switch (projectID) {
        case "proj1":
            images = project1Images;
            break;
        case "proj2":
            images = project2Images;
            break;
        case "proj3":
            images = project3Images;
            break;
        case "proj4":
            images = project4Images;
            break;
        case "proj5":
            images = project5Images;
            break;
        case "proj6":
            images = project6Images;
            break;
        case "other":
            images = otherImages;
            break;
        default:
            images = [];
    }

    /*const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'auto'; 
        }
        return () => {
            document.body.style.overflow = 'auto'; 
        };
    }, [lightboxOpen]);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: goToNextImage,
        onSwipedRight: goToPreviousImage,
        preventScrollOnSwipe: true  
    });*/

    return (
        <div className="project-details">
            <ImageGallery items={images} />;
            {/*<div className="img-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt = ""
                        className="details-img"
                        onClick={() => openLightbox(index)}
                    />
                ))}
            </div>

            {lightboxOpen && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        &times;
                    </button>
                    <img
                        src={images[currentImageIndex]}
                        alt=""
                        className="lightbox-image"
                    />
                    <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); goToPreviousImage(); }}>
                        &#10094;
                    </button>
                    <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); goToNextImage(); }}>
                        &#10095;
                    </button>
                </div>
            )}*/}
        </div>
    );
}

export default ProjectDetails;
