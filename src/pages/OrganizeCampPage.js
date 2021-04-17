import React, { useState } from 'react';

// Components
import Editbox from '../components/EditBox';
import { DropDownList } from '../components/DropDownList';
import { Button } from '../components/Button';

// Icons
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

// SCSS
import '../scss/BloodCampOrganise.scss';

// Images
import Personal from '../assets/Personal.png';
import Photo3 from '../assets/Photo3.png';

export default function OrganizeCampPage() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className='Camp-container'>
        <form>
          {click ? (
            <div className='Camp-container_personal'>
              <div>
                <h3> General </h3>
                <div className='Camp-container-name'>
                  <Editbox label='First Name' type='text'></Editbox>
                  <Editbox label='Last Name' type='text'></Editbox>
                </div>

                <Editbox label='Name Of Organisation' type='text'></Editbox>
                <Editbox label='Email Id' type='email'></Editbox>
                <Editbox label='Contact No' type='text'></Editbox>

                <div
                  className='Camp-container_personal_next'
                  onClick={handleClick}
                >
                  <FaArrowCircleRight />
                </div>
              </div>
            </div>
          ) : (
            <div className='Camp-container_personal'>
              <h3> About Camp </h3>
              <div>
                <Editbox label='Venue' type='text'></Editbox>

                <div className='Camp-container_address'>
                  <DropDownList label='State' type='1' />
                  <Editbox label='City/Town' type='text'></Editbox>
                </div>

                <div className='Camp-container_address'>
                  <Editbox label='Zip Code' type='text'></Editbox>
                  <Editbox label='Expected Donors' type='text'></Editbox>
                </div>

                <DropDownList label='Refreshment Requirred' type='2' />

                <div className='Camp-container_address'>
                  <div
                    className='Camp-container_personal_prev'
                    onClick={handleClick}
                  >
                    <FaArrowCircleLeft />
                  </div>
                  <div className='Organise_camp_submit_button'>
                    <Button
                      buttonColor='green'
                      buttonSize='btn--medium'
                      type='submit'
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
        <div className='BloodCampOrganise-imgWrapper'>
          {click ? (
            <img src={Personal} alt='Personal'></img>
          ) : (
            <img src={Photo3} alt='Personal'></img>
          )}
        </div>
      </div>
    </>
  );
}
