import React from 'react';

const Avatar = ({ speakerImage }) => {
  return (
    <div>
      <img
        src={speakerImage}
        alt='speaker image'
        style={{
          width: '10rem',
          height: '10rem',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default Avatar;
