import React from 'react';

import HomepageSection from '../components/HomepageSection';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './home/data';

import '../scss/Homepage.scss';

import { Slideshow } from '../components/FrontPageComponent';

const HomePage = props => {
  return (
    <div className='homepage-wrapper'>
      <div className='homepage-wrapper-sections'>
        <Slideshow></Slideshow>
        <HomepageSection {...homeObjOne} />
        <HomepageSection {...homeObjTwo} />
        <HomepageSection {...homeObjThree} />
        <HomepageSection {...homeObjFour} />
      </div>
    </div>
  );
};

export default HomePage;
