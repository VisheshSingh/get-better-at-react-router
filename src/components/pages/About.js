import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
        tenetur earum, distinctio hic delectus quos in corporis commodi, culpa
        ratione veniam vel fuga alias, magnam similique qui repellat
        consequuntur. Porro tenetur ipsam est quam voluptatum, earum ipsum quo
        minus repellat!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem iusto inventore autem harum aliquam esse, omnis dolor
        doloribus maxime.
      </p>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
        similique, nesciunt iste tempora blanditiis sed repudiandae, et placeat
        ut a magnam quaerat dolorum totam odio dolores consectetur error
        architecto vitae?
      </p>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  min-height: 100%;
  background: var(--deep-dark);
  color: var(--tomato);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  padding: 0 4rem;
`;
