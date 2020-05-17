import React from 'react';
import Reactlogo from './img/react.png';

const ReactJS = ({ data }) => {
  return (
    <div>
      <img src={Reactlogo} alt='React logo' style={{ width: '20rem' }} />
      <h3>{data[2].title}</h3>
      <p>{data[2].description}</p>
    </div>
  );
};

export default ReactJS;
