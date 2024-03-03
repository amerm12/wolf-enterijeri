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

    return(
        <div className = "projects">
            <h1 className = "projects-title">Projekti</h1>
            <p className = "projects-paragraph">Dobrodošli na stranicu projekata Wolf Enterijeri, gdje možete istražiti naše najnovije
                i najinspirativnije radove. Naša strast za dizajn enterijera i inovativnim pristupom svakom
                projektu rezultira stvaranjem prostora koji zadovoljavaju i nadmašuju očekivanja naših klijenata.
                U nastavku možete pronaći pregled nekih od naših nedavnih projekata, koji odslikavaju našu 
                predanost kvalitetu i estetici.
            </p>
            <Project
                image={mainImg}
                title="Projekt 1"
                type="Kuća"
                location="Sarajevo"
                date="2023"
                viewDetails={() => viewDetails("proj1")}
            />

            <Project
                image={mainImg2}
                title="Projekt 2"
                type="Kuća"
                location="Tuzla"
                date="2023"
                viewDetails={() => viewDetails("proj2")}
            />

            <Project 
                image = {mainImg3}
                title = "Projekt 3"
                type = "Villa"
                location = "Sarajevo"
                date = "2023"
                viewDetails={() => viewDetails("proj3")}
            />

            <Project 
                image = {mainImg4}
                title = "Projekt 4"
                type = "Stan"
                location = "Sarajevo"
                date = "2023"
                viewDetails={() => viewDetails("proj4")}
            />

            <Project 
                image = {mainImg5}
                title = "Projekt 5"
                type = "Hotel"
                location = "Sarajevo"
                date = "2023"
                viewDetails={() => viewDetails("proj5")}
            />

            <Project 
                image = {mainImg6}
                title = "Projekt 6"
                type = "Stan"
                location = "Sarajevo"
                date = "2023"
                viewDetails={() => viewDetails("proj6")}
            />

            <button className = "see-other" onClick={() => viewDetails("other")}>Pogledaj Ostale Projekte</button>

            
        </div>
    );
}

export default Projects;