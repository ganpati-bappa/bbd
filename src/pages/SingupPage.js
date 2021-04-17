import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { singup } from '../redux/actions/auth';

import '../scss/singupPage.scss';
import LottieAnimation from '../components/LottieAnimation';
import yoga from '../assets/yoga.json';
import done from '../assets/done.json';

export default function SingupPage() {
  const isLogin = useSelector(state => state.auth.isLogin);
  const number = useSelector(state => state.auth.number);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [bgroup, setBgroup] = useState();

  const onNameChange = e => {
    setName(e.target.value);
  };
  const onAgeChange = e => {
    setAge(e.target.value);
  };
  const onGroupChange = e => {
    setBgroup(e.target.value);
  };

  const submit = () => {
    console.log(name);
    console.log(age);
    console.log(bgroup);
    dispatch(singup({ number, name, age, bgroup }));
  };

  return (
    <>
      <div className='singup_page_con'>
        <div className='style_img_con'>
          <LottieAnimation lotti={yoga} height={300} width={300} />
        </div>
        <div className='input_con'>
          <>
            <div className='info_text_con'>
              <h2>Tell us more about yourself</h2>
            </div>
            <form className='info_form_con'>
              <input
                className='name_field'
                name='name'
                placeholder='Your name'
              />
              <input className='age_field' name='age' placeholder='Age' />
              <input
                className='group_field'
                name='blood_group'
                placeholder='Blood Group'
              />
            </form>
            <button> Submit</button>
          </>
        </div>
      </div>
      {!number ? <Redirect to='/auth' /> : null}
      {isLogin ? <Redirect to='/' /> : null}
    </>
  );
}
