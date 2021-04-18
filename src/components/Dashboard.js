import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import '../scss/Dashboard.scss';

// SCSS
import Mohit from '../assets/avataar.png';

// Components
import Textbox from './Textbox';
import { FaForward, FaBackward } from 'react-icons/fa';

export default function Dashboard() {
  const name = useSelector(state => state.auth.name);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className={click ? 'Dashboard' : 'Dashboard hide'}>
        <div className='Dashboard-wrapper'>
          <div className='Dashboard-img-wrapper'>
            <img src={Mohit} alt='Profile_dp'></img>
          </div>

          <div className='Dashboard-Name'>{name}</div>

          <Textbox if_2='true' string1='No of Times donated ' string2='0' />
          <Textbox if_2='true' string1='No of Times Received ' string2='0' />
          <Textbox if_2='true' string1='Status ' string2='Online' />
          <Textbox if_2='true' string1='Rating' string2='1672' />
        </div>

        <div className='Dashboard-icon'>
          <div className='Dashboard-button' onClick={handleClick}>
            {click ? <FaForward /> : <FaBackward />}
          </div>
        </div>
      </div>
    </div>
  );
}
