import React from 'react';
import MapLocation from '../Components/MapLocation';
import '../pages/About.css';

const About = () => {
    

    return(
        <div className = "about-us">
            <h1>O Nama</h1>
            <p>Dobrodošli u Wolf Enterijeri, firmu osnovanu 2007. godine, sa sjedištem na adresi Tvornička 6 u Sarajevu. Sa ponosom
                 smo u industriji interijerskog dizajna već više od jedne decenije, te smo izrasli u prepoznatljivu snagu koja spaja 
                 stručnost, kreativnost i predanost kvaliteti. Naša misija je stvoriti prostore koji odražavaju osobnost i potrebe
                  naših klijenata, istovremeno pružajući vrhunsku estetiku i funkcionalnost.
            </p>
            <p>Uz profesionalan pristup i pažljivo osmišljena rješenja, Wolf Enterijeri su postali sinonim za izvrsnost u interijerskom
                 dizajnu. Naš tim stručnjaka kontinuirano radi na ispunjavanju i prevazilaženju očekivanja, uvijek težeći ka postizanju
                  savršenstva u svakom projektu. Bilo da je riječ o stambenim ili poslovnim prostorima, svaki naš projekt nosi pečat 
                  inovativnosti, elegancije i visokih standarda. Pridružite nam se na putovanju kroz svijet dizajna gdje svaki detalj 
                  govori priču o našoj strasti i predanosti stvaranju prostora koji inspiriraju i oduševljavaju.
            </p>
            <div className = "about-container">
                <div className = "about-info">
                    <h2>Tvornička 6, Sarajevo</h2>
                    <h2>wolfenterijeri@gmail.com</h2>
                    <h2>033 628-925</h2>
                </div>
                
                <MapLocation/>
                
            </div>
            
        </div>
    );
};

export default About;