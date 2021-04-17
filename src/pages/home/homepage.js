import React from 'react';
// Components
import HomepageSection from '../../Components/HomepageSection';

// Parametres
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

// SCSS
import './../../SCSS/Homepage.scss'

// Components
import {Slideshow} from './../../Components/FrontPageComponent'

const Homepage = props => {
    return (
        <div className = "homepage-wrapper">
            <div className = "homepage-wrapper-sections">
                <Slideshow></Slideshow>
                <HomepageSection {...homeObjOne}/>
                <HomepageSection {...homeObjTwo}/>
                <HomepageSection {...homeObjThree}/>
                <HomepageSection {...homeObjFour}/>
            </div>
        </div>
    );
};

export default Homepage;