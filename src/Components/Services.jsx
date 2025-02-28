import React from 'react';
import '../Components/Services.css';
import Service from '../Components/Service';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faTape } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Services(){
    return(
        <div className = "services">
            <h1>Naše Usluge</h1>

            <div className="services-container">
                <Service icon = { faHandshake } title = "Dogovor sa Kupcem" />
                <Service icon = { faTape } title = "Terensko Mjerenje" />
                <Service icon = { faPalette } title = "Savjetovanje za Dizajn" />
                <Service icon = { faHammer } title = "Izrada" />
                <Service icon = { faCouch } title = "Montaža" />
                <Service icon = { faCircleCheck } title = "Završni Radovi" />
            </div>
        </div>
    );
}

export default Services;