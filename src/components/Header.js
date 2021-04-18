import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';

import { logOut } from '../redux/actions/auth';
import { getBank } from '../redux/actions/search';
import { getCamp } from '../redux/actions/search';

import '../scss/header.scss';
import Dashboard from './Dashboard';

export default function Header() {
  const isLogin = useSelector(state => state.auth.isLogin);
  const [isredirect, setIsredirect] = useState(false);
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  const handelBanksearch = () => {
    setIsredirect(true);
    dispatch(getBank({ lat, lng }));
  };
  const handelCampsearch = () => {
    setIsredirect(true);
  };

  const handelsubmit = e => {
    e.preventDefault();
    // dispatch(getBank({ lat, lng }));
    setIsredirect(true);
  };

  const onPlaceSelected = place => {
    console.log('plc', place);
    setLat(place.geometry.location.lat());
    setLng(place.geometry.location.lng());
  };

  return (
    <>
      <div className='header_con'>
        <div className='header_links'>
          <div className='header_links_left'>
            <Link className='logo_link' to='/'>
              BloodBank
            </Link>
            <Link className='nav_link' to='/regbloodbank'>
              Reg a Blood Bank
            </Link>
            <Link className='nav_link' to='/organizecamp'>
              Organize Blood Donation Camp
            </Link>
          </div>
          <div className='header_links_right'>
            {isLogin ? (
              <button onClick={logout} className='logout_btn'>
                LogOut
              </button>
            ) : (
              <div>
                <Link className='auth_link' to='/auth'>
                  Login
                </Link>
                <Link className='auth_link' to='/singup'>
                  singup
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className='search_box_con'>
          <div className='search_box'>
            <form onSubmit={handelsubmit}>
              <Autocomplete
                style={{
                  width: '100%',
                  height: 48,
                  border: 'none',
                  outline: 'none',
                  fontSize: 18,
                  backgroundColor: '#fff',
                }}
                placeholder='search....'
                onPlaceSelected={onPlaceSelected}
                types={['(regions)']}
              />
            </form>
          </div>
          <div className='search_btn_con'>
            <button onClick={handelBanksearch} className='search_btn'>
              BloodBank
            </button>
            <button onClick={handelCampsearch} className='search_btn'>
              Camp
            </button>
          </div>
        </div>
      </div>
      <Dashboard />
      {isredirect ? <Redirect to='/search' /> : null}
    </>
  );
}
