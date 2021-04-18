import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { getcode } from '../redux/actions/auth';
import { verifycode } from '../redux/actions/auth';

import '../scss/authPage.scss';
import LottieAnimation from '../components/LottieAnimation';
import otp from '../assets/otp.json';
import otpsentto from '../assets/otpsentto.json';

export default function AuthPage() {
  const token = useSelector(state => state.auth.token);
  const isLogin = useSelector(state => state.auth.isLogin);
  const codeSent = useSelector(state => state.auth.codeSent);
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');

  const sendOTP = () => {
    console.log(number);
    dispatch(getcode(number));
  };

  const onNumberChange = e => {
    setNumber(e.target.value);
  };
  const numberSubmit = e => {
    e.preventDefault();
    dispatch(getcode({ number }));
  };

  const verifyOtp = () => {
    console.log(code);
    dispatch(verifycode({ number, code }));
  };

  const onOtpChange = e => {
    setCode(e.target.value);
  };
  const otpSubmit = e => {
    e.preventDefault();
    dispatch(verifycode({ number, code }));
  };

  return (
    <>
      <div className='auth_page_con'>
        <div className='style_img_con'>
          {codeSent ? (
            <LottieAnimation lotti={otp} height={300} width={300} />
          ) : (
            <LottieAnimation lotti={otpsentto} height={300} width={300} />
          )}
        </div>
        <div className='input_con'>
          {!codeSent ? (
            <>
              <div className='input_text_con'>
                <h2>Welcome!</h2>
                <p>Enter your number</p>
              </div>
              <form onSubmit={numberSubmit} className='form_con'>
                <label>Phone Number</label>
                <input
                  value={number}
                  name='number'
                  placeholder='9876543210'
                  onChange={onNumberChange}
                />
              </form>
              <button className='submit_btn' onClick={sendOTP}>
                Send OTP
              </button>
            </>
          ) : (
            <>
              <div className='input_text_con'>
                <h2>Welcome!</h2>
                <p>OTP Sent TO: {number}</p>
              </div>
              <form onSubmit={otpSubmit} className='form_con'>
                <input
                  value={code}
                  onChange={onOtpChange}
                  name='otp'
                  placeholder='Enter OTP'
                />
              </form>
              <button className='submit_btn' onClick={verifyOtp}>
                Verify OTP
              </button>
              <Link className='otp_not_sent' to='/auth'>
                Not recive otp? Resend
              </Link>
            </>
          )}
        </div>
      </div>
      {isLogin ? <Redirect to='/' /> : null}
    </>
  );
}
