import { useNavigate } from 'react-router-dom';
import Project from '../Components/Project';
import '../Components/Project.css';
import mainImg1 from '../assets/projekt1/mainImg1.jpg';
import mainImg2 from '../assets/projekt2/mainImg2.jpg';
import mainImg3 from '../assets/projekt3/mainImg3.jpg';
import mainImg4 from '../assets/projekt4/mainImg4.jpg';
import mainImg5 from '../assets/projekt5/mainImg5.jpg';
import mainImg6 from '../assets/projekt6/mainImg6.jpg';
import mainImg7 from '../assets/projekt7/mainImg7.jpg';
import mainImg8 from '../assets/otherProjects/mainImg8.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {

    const navigate = useNavigate();
    function viewDetails(projectID) {
        navigate('/project-details', { state: { projectID } });
    }

    function scrollLeft() {
        const scrollContainer = document.querySelector(".allProjects");
        scrollContainer.scrollBy({
            left: -1000,
            behavior: "smooth",
        });
    }

    function scrollRight(){
        const scrollContainer = document.querySelector(".allProjects");
        scrollContainer.scrollBy({
            left: 1000,
            behavior: "smooth",
        });
    }

    return(
        <div className = "projects">
            <h1>Projekti</h1>
            <p>Dobrodošli na stranicu projekata Wolf Enterijeri, gdje možete istražiti naše najnovije
                i najinspirativnije radove. Naša strast za dizajn enterijera i inovativnim pristupom svakom
                projektu rezultira stvaranjem prostora koji zadovoljavaju i nadmašuju očekivanja naših klijenata.
                U nastavku možete pronaći pregled nekih od naših nedavnih projekata, koji odslikavaju našu 
                predanost kvalitetu i estetici.
            </p>

            <div className = "projectsContainer">
                <FontAwesomeIcon 
                    icon={faChevronLeft} 
                    className="scroll-btn left" 
                    onClick={scrollLeft} 
                />

                <div className = "allProjects">
                <Project
                    image={mainImg1}
                    viewDetails={() => viewDetails("proj1")}
                />

                <Project
                    image={mainImg2}
                    viewDetails={() => viewDetails("proj2")}
                />

                <Project 
                    image = {mainImg3}
                    viewDetails={() => viewDetails("proj3")}
                />

                <Project
                    image={mainImg4}
                    viewDetails={() => viewDetails("proj4")}
                />

                <Project
                    image={mainImg5}
                    viewDetails={() => viewDetails("proj5")}
                />

                <Project
                    image={mainImg6}
                    viewDetails={() => viewDetails("proj6")}
                />

                <Project
                    image={mainImg7}
                    viewDetails={() => viewDetails("proj7")}
                />

                <Project
                    image={mainImg8}
                    viewDetails={() => viewDetails("other")}
                />
     
            </div>
            
            <FontAwesomeIcon 
                icon={faChevronRight}
                className = "scroll-btn right" 
                onClick ={scrollRight}
            />
                
            </div>
            
        </div>
    );
}

export default Projects;