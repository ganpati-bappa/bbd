import React, { useState } from 'react';

// SCSS
import '../scss/DropDownlist.scss';

const States = [
  'Gujrat',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhatisgarh',
  'Goa',
  'Gujrat',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharastra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Orrisa',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

const Agree = ['Yes', 'No'];

export const DropDownList = ({ label, type }) => {
  const [click, setClick] = useState(false);

  const [Location, setLocation] = useState('--Select--');

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className='DropDownList-container'>
      <div className='DropDownList-Label'>{label}</div>
      <div className='default_option' onClick={handleClick}>
        {Location}
      </div>
      {click ? (
        <div className='list-options'>
          <ul>
            {type == 1
              ? States.map(states => {
                  return (
                    <div className='list-items' onClick={handleClick}>
                      {states}
                    </div>
                  );
                })
              : Agree.map(agree => {
                  return (
                    <div className='list-items' onClick={handleClick}>
                      {agree}
                    </div>
                  );
                })}
          </ul>
        </div>
      ) : (
        <div className='list-options hidden'></div>
      )}
    </div>
  );
};

export default DropDownList;
