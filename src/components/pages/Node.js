import React from 'react';
import nodelogo from './img/node.png';

const Node = ({ data }) => {
  return (
    <div>
      <img src={nodelogo} alt='Node js logo' style={{ width: '20rem' }} />
      <h3>{data[3].title}</h3>
      <p>{data[3].description}</p>
    </div>
  );
};

export default Node;
