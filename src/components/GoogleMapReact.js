import React, { useState } from 'react';

import GoogleMapReact from 'google-map-react';

import { FaMapMarkerAlt } from 'react-icons/fa';

//SCSS
import '../scss/GoogleMapReact.scss';

const AnyReactComponent = ({ text }) => (
  <div className='map_marker'>
    <FaMapMarkerAlt />
  </div>
);

export default function SimpleMap({ newbanks }) {
  const [center, setCenter] = useState({
    lat: 26.4499,
    lng: 80.3319,
  });
  const [zoom, setZoom] = useState(11);

  return (
    <div className='map_container'>
      <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
        {newbanks.map(bank => (
          <AnyReactComponent
            lat={bank.location.coordinates[1]}
            lng={bank.location.coordinates[0]}
          />
        ))}
        {/* <AnyReactComponent lat={26.4499} lng={80.3319} /> */}
      </GoogleMapReact>
    </div>
  );
}
