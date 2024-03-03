import React from 'react';
import Slider from '../Components/Slider';
import FeaturedProjects from '../Components/FeaturedProjects';
import Services from '../Components/Services';


function Home(){
    return(
        <div>
            <Slider />
            <FeaturedProjects />   
            <Services />
        </div>
    );
}

export default Home;