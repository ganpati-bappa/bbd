import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import LottieAnimation from '../components/LottieAnimation';
import error2 from '../assets/error2.json';

import '../scss/notfound.scss';

export default function NomatchPage() {
  return (
    <div className='not_found_con'>
      <LottieAnimation lotti={error2} height={400} width={600} />

      <h2>
        <Link to='/'>Go To Home</Link>
      </h2>
    </div>
  );
}
