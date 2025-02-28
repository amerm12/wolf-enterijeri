import React from 'react';
import './Footer.css';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <div className = "footer">
            <div className = "footer-cards">
                
                <div className = "footer-left">
                    <img src={logo} alt="logo"></img> 
                </div>
                
                <div className = "footer-middle">
                    <h2>Pratite Nas</h2>
                    <a className = "fb-icon" href = "https://www.facebook.com/wolfenterijeri1/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>

                <div className = "footer-right">
                    <h2>Kontakt</h2>
                    <p>033 628-925</p>
                    <p>Tvornička 6, Sarajevo</p>
                    <p>wolfenterijeri@gmail.com</p>
                </div>
            </div>

            <div className = "rights">
                <p>© {currentYear} Sva prava pridržana. Developed by <a href = "https://www.linkedin.com/in/amer-mulaosmanović-572b282b7/">Amer Mulaosmanović</a>.</p>
            </div>
        </div>
    );
}

export default Footer;