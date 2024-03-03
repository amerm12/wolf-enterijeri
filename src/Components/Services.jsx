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
                <Service icon = { faHandshake } title = "Dogovor sa Kupcem" paragraph = "Pružamo sveobuhvatan pregled vaših potreba i želja kako bismo ispunili očekivanjima." />
                <Service icon = { faTape } title = "Terensko Mjerenje" paragraph = "Precizno mjerimo prostor kako bismo osigurali optimalno prilagođen dizajn vašeg interijera." />
                <Service icon = { faPalette } title = "Savjetovanje za Dizajn" paragraph = "Pružamo stručne savjete i ideje za dizajn koji odražava vaš stil i estetske preferencije." />
                <Service icon = { faHammer } title = "Izrada" paragraph = "Naš tim majstora vješto izrađuje svaki komad namještaja i dekoraciju prema vašim specifikacijama." />
                <Service icon = { faCouch } title = "Montaža" paragraph = "Osiguravamo preciznu montažu svih elemenata vašeg interijera kako bi se postigao besprijekoran izgled." />
                <Service icon = { faCircleCheck } title = "Završni Radovi" paragraph = "Posvećeni smo detaljima i kvalitetnoj završnoj obradi svakog projekta kako bi se postigao izvanredan rezultat." />
            </div>
        </div>
    );
}

export default Services;