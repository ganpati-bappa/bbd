import { React } from 'react';

import '../scss/Blood_availaible.scss';

export function BloodAvailaible({ bloodgroup }) {
  return (
    <div className='Blood-availaibility-container'>
      <div> {bloodgroup && Object.values(bloodgroup)[1]}</div>
      <div> {bloodgroup && Object.values(bloodgroup)[2]} Unit</div>
    </div>
  );
}
