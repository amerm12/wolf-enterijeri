import React from 'react';
import './FeaturedProjects.css';
import FeaturedProject from './FeaturedProject';
import projectOneImg from '../assets/projekt3/mainImg3.jpg';
import projectTwoImg from '../assets/projekt4/mainImg4.jpg';
import projectThreeImg from '../assets/projekt5/mainImg5.jpg';

function featuredProjects(){
    return(
        <div className = "featured-projects">
            <h1>Istaknuti Projekti</h1>
            <div className = "featured-projects-container">
            <FeaturedProject
                imageSrc={projectOneImg}
                imageAlt="projekt 1"
                projectID = "proj3"
            />
            <FeaturedProject
                imageSrc={projectTwoImg}
                imageAlt="projekt 2"
                projectID = "proj4"
            />
            <FeaturedProject
                imageSrc={projectThreeImg}
                imageAlt="projekt 3"
                projectID = "proj5"
            />
            </div>
        </div>
    );
}

export default featuredProjects;