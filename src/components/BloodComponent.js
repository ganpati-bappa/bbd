import React, { useState } from 'react';

//SCSS
import '../scss/BloodComponent.scss';

export const BloodComponent = ({ type }) => {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      {click ? (
        <div className='BloodComponent-wrapper' onClick={handleClick}>
          {type}
        </div>
      ) : (
        <div className='BloodComponent-clicked ' onClick={handleClick}>
          {type}
        </div>
      )}
    </>
  );
};

export default BloodComponent;
