import React from 'react';
import mongodb from '../img/mongodb.png';

const MongoDB = ({ data }) => {
  return (
    <div>
      <img src={mongodb} alt='Mongo DB logo' style={{ width: '10rem' }} />
      <h3>{data[0].title}</h3>
      <p>{data[0].description}</p>
    </div>
  );
};

export default MongoDB;
