import React from 'react';

// Components
import { Button } from './Button';
import { Link } from 'react-router-dom';

// Images
import Illus1 from './../assets/bloodDonate.jpg'
import Illus2 from './../assets/Photo.png'
import Illus3 from './../assets/Photo3.png'
import Illus4 from './../assets/EmergencyDonateblood.png'

// SCSS
import '../scss/HomepageSection.scss';

const Images = [Illus1, Illus2, Illus3, Illus4];

function HomepageSection({
  lightbg,
  topline,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  link,
}) {
  const checkImage = img >= 0 && img < Images.length ? Images[img] : Images[0];

  return (
    <>
      <div
        className={
          lightbg ? 'home__homepage-section' : 'home__homepage-section darkBg'
        }
      >
        <div className='container'>
          <div
            className='row home__homepage-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className='col'>
              <div className='home__homepage-text-wrapper'>
                <div className='top-line'> {topline} </div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {' '}
                  {headline}{' '}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__homepage-subtitle'
                      : 'home__homepage-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to={link}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='home__homepage-img-wrapper'>
              <img
                src={`${checkImage}`}
                alt={alt}
                className='homepage-image'
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageSection;
