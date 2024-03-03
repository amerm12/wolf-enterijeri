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
                title="Villa"
                description="Ova vila oslikava eleganciju i luksuz kroz pažljivo odabrane detalje, stvarajući prostor koji 
                će zadovoljiti najistančanije ukuse i pružiti ugodan boravak."
                projectID = "proj3"
            />
            <FeaturedProject
                imageSrc={projectTwoImg}
                imageAlt="projekt 2"
                title="Stan"
                description="Kreativni pristup i funkcionalni dizajn - naši stambeni projekti prilagođavaju se vašem stilu
                i potrebama, stvarajući prostor u kojem se osjećate udobno u svakom trenutku."
                projectID = "proj4"
            />
            <FeaturedProject
                imageSrc={projectThreeImg}
                imageAlt="projekt 3"
                title="Hotel"
                description="Naš dizajn unaprijedio je ovaj hotel s elegancijom i funkcionalnošću, stvarajući prostor koji 
                goste oduševljava. Svaka soba odražava našu posvećenost detaljima, čineći boravak nezaboravnim."
                projectID = "proj5"
            />
            </div>
        </div>
    );
}

export default featuredProjects;