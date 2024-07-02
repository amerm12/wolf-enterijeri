import { useNavigate } from 'react-router-dom';
import Project from '../Components/Project';
import '../Components/Project.css';
import mainImg from '../assets/projekt1/mainImg.jpg';
import mainImg2 from '../assets/projekt2/mainImg2.jpg';
import mainImg3 from '../assets/projekt3/mainImg3.jpg';
import mainImg4 from '../assets/projekt4/mainImg4.jpg';
import mainImg5 from '../assets/projekt5/mainImg5.jpg';
import mainImg6 from '../assets/projekt6/mainImg6.jpg';

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
            <h1 className = "projects-title">Projekti</h1>
            <p className = "projects-paragraph">Dobrodošli na stranicu projekata Wolf Enterijeri, gdje možete istražiti naše najnovije
                i najinspirativnije radove. Naša strast za dizajn enterijera i inovativnim pristupom svakom
                projektu rezultira stvaranjem prostora koji zadovoljavaju i nadmašuju očekivanja naših klijenata.
                U nastavku možete pronaći pregled nekih od naših nedavnih projekata, koji odslikavaju našu 
                predanost kvalitetu i estetici.
            </p>

            <div className = "projectsContainer">
                <button class="scroll-btn left" onClick={scrollLeft}>&lt;</button>
                <div className = "allProjects">
                <Project
                    image={mainImg}
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
            </div>
                <button class="scroll-btn right" onClick={scrollRight}>&gt;</button>
            </div>
            
            
            {/* 
                 <button className = "see-other" onClick={() => viewDetails("other")}>Pogledaj Ostale Projekte</button>
            */}
            
        </div>
    );
}

export default Projects;