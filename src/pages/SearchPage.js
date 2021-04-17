import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CardHospital } from '../components/Card_hospital';
import SimpleMap from '../components/GoogleMapReact';

import '../scss/Search.scss';

import { filterAll } from '../redux/actions/filter';
import { filterAp } from '../redux/actions/filter';
import { filterAn } from '../redux/actions/filter';
import { filterABp } from '../redux/actions/filter';
import { filterABn } from '../redux/actions/filter';
import { filterBp } from '../redux/actions/filter';
import { filterBn } from '../redux/actions/filter';
import { filterOp } from '../redux/actions/filter';
import { filterOn } from '../redux/actions/filter';

export default function SearchPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.search.loading);
  const banks = useSelector(state => state.search.banks);
  const camps = useSelector(state => state.search.camps);
  const error = useSelector(state => state.search.error);
  const newbanks = useSelector(state => state.filter.newbanks);
  console.log(banks);
  console.log(newbanks);

  useEffect(() => {
    dispatch(filterAll({ banks }));
  }, []);

  const filterALL = () => {
    dispatch(filterAll({ banks }));
  };
  const filterAP = () => {
    dispatch(filterAp({ banks }));
  };
  const filterAN = () => {
    dispatch(filterAn({ banks }));
  };
  const filterABP = () => {
    dispatch(filterABp({ banks }));
  };
  const filterABN = () => {
    dispatch(filterABn({ banks }));
  };
  const filterBP = () => {
    dispatch(filterBp({ banks }));
  };
  const filterBN = () => {
    dispatch(filterBn({ banks }));
  };
  const filterOP = () => {
    dispatch(filterOp({ banks }));
  };
  const filterON = () => {
    dispatch(filterOn({ banks }));
  };

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (newbanks.length >= 0) {
    return (
      <div className='search-wrapper'>
        <div className='search-cards'>
          <div className='filter_btns_con'>
            <button onClick={filterALL} className='filter_btn'>
              All
            </button>
            <button onClick={filterAP} className='filter_btn'>
              A+
            </button>
            <button onClick={filterAN} className='filter_btn'>
              A-
            </button>
            <button onClick={filterABP} className='filter_btn'>
              B+
            </button>
            <button onClick={filterABN} className='filter_btn'>
              B-
            </button>
            <button onClick={filterBP} className='filter_btn'>
              AB+
            </button>
            <button onClick={filterBN} className='filter_btn'>
              AB-
            </button>
            <button onClick={filterOP} className='filter_btn'>
              O+
            </button>
            <button onClick={filterON} className='filter_btn'>
              O-
            </button>
          </div>

          {newbanks.map(bank => (
            <CardHospital bank={bank} />
          ))}
        </div>

        <div className='search-maps-container'>
          <div className='search-hospital-location'>
            <SimpleMap newbanks={newbanks} />
          </div>
        </div>
      </div>
    );
  }
  if (camps.length > 0) {
    return (
      <div className='search-wrapper'>
        <div className='search-cards'>
          <CardHospital />
          <CardHospital />
        </div>

        <div className='search-maps-container'>
          <div className='search-hospital-location'>
            <SimpleMap />
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>error</div>;
  }
  return <div className='search-wrapper'>wating for your search</div>;
}
