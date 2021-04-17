import React, { useState } from 'react';

// Icons
import { FaLocationArrow } from 'react-icons/fa';

// Images
import defultimage from '../assets/hospital.webp';

// SCSS
import '../scss/Card_hospital.scss';

// Components
import { BloodAvailaible } from '../components/Blood_availaible';

export function CardHospital({ bank }) {
  return (
    <div className='card1-container'>
      <div className='card1-wrap'>
        <div className='card1-details'>
          <div className='card-hospital-details'>
            <div> {bank.bloodbank_name} </div>

            <div>
              <FaLocationArrow />
              {bank.location && Object.values(bank.location)[1]}
            </div>
          </div>

          <div className='card1-image'>
            <div className='card1-image-container'>
              <img src={defultimage} alt='Profile'></img>
            </div>
          </div>
        </div>

        <div className='card1-blood-availaible'>
          <div className='card1-label'> Availaible Blood</div>
          <div className='bloodAvalaibilityCards'>
            {bank.blood.map(bloodgroup => (
              <BloodAvailaible bloodgroup={bloodgroup} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
