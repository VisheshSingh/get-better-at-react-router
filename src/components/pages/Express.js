import React from 'react';
import express from '../img/express.png';

const Express = ({ data }) => {
  return (
    <div>
      <img src={express} alt='Express js logo' style={{ width: '10rem' }} />
      <h3>{data[1].title}</h3>
      <p>{data[1].description}</p>
    </div>
  );
};

export default Express;
