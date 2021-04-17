import React from 'react';

import HomepageSection from '../components/HomepageSection';

import { homeObjOne, homeObjTwo } from './home/data';

export default function Homepage() {
  return (
    <>
      <HomepageSection {...homeObjOne} />
      <HomepageSection {...homeObjTwo} />
      <HomepageSection {...homeObjOne} />
      <HomepageSection {...homeObjTwo} />
    </>
  );
}
