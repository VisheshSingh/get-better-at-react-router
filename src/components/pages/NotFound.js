import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h3 className='text-center my-10'>😩 oh no! Sorry, not found 😣</h3>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background: var(--deep-dark);
  color: var(--white);
`;
