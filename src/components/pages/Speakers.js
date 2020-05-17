import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../layout/Button';
import avatar1 from '../../assets/speaker1.png';
import avatar2 from '../../assets/speaker2.png';
import avatar3 from '../../assets/speaker3.png';
import avatar4 from '../../assets/speaker4.png';
import avatar5 from '../../assets/speaker5.png';

const Speakers = () => {
  return (
    <SpeakerContainer>
      <div className='container'>
        <div className='row mx-auto justify-content-center'>
          {/* SPEAKER 1 */}
          <div className='card col-xs-6 p-2'>
            <img
              src={avatar1}
              alt='Speaker 1'
              className='card-img-top mx-auto'
            />
            <div className='card-body'>
              <h3 className='card-title text-center pb-2'>Peter Gregory</h3>
              <h5>
                Subject: <b>NODE JS</b>
              </h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                laudantium id magni impedit, quasi ullam qui maiores aliquid
                odio aut excepturi debitis, temporibus, quae facere perspiciatis
                aperiam amet! Dicta, qui?
              </p>
              <Link to='/'>
                <Button className='btn btn-primary text-uppercase'>
                  More info about speaker
                </Button>
              </Link>
            </div>
          </div>
          <div className='card col-xs-6 p-2'>
            <img
              src={avatar2}
              alt='Speaker 1'
              className='card-img-top mx-auto'
            />
            <div className='card-body'>
              <h3 className='card-title text-center pb-2'>Mary Poppins</h3>
              <h5>
                Subject: <b>JavaScript</b>
              </h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                laudantium id magni impedit, quasi ullam qui maiores aliquid
                odio aut excepturi debitis, temporibus, quae facere perspiciatis
                aperiam amet! Dicta, qui?
              </p>
              <Link to='/'>
                <Button className='btn btn-primary text-uppercase'>
                  More info about speaker
                </Button>
              </Link>
            </div>
          </div>
          <div className='card col-xs-6 p-2'>
            <img
              src={avatar3}
              alt='Speaker 1'
              className='card-img-top mx-auto'
            />
            <div className='card-body'>
              <h3 className='card-title text-center pb-2'>Anita Rajguru</h3>
              <h5>
                Subject: <b>Mongo DB</b>
              </h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                laudantium id magni impedit, quasi ullam qui maiores aliquid
                odio aut excepturi debitis, temporibus, quae facere perspiciatis
                aperiam amet! Dicta, qui?
              </p>
              <Link to='/'>
                <Button className='btn btn-primary text-uppercase'>
                  More info about speaker
                </Button>
              </Link>
            </div>
          </div>
          <div className='card col-xs-6 p-2'>
            <img
              src={avatar4}
              alt='Speaker 1'
              className='card-img-top mx-auto'
            />
            <div className='card-body'>
              <h3 className='card-title text-center pb-2'>Mark Florence</h3>
              <h5>
                Subject: <b>React</b>
              </h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                laudantium id magni impedit, quasi ullam qui maiores aliquid
                odio aut excepturi debitis, temporibus, quae facere perspiciatis
                aperiam amet! Dicta, qui?
              </p>
              <Link to='/'>
                <Button className='btn btn-primary text-uppercase'>
                  More info about speaker
                </Button>
              </Link>
            </div>
          </div>
          <div className='card col-xs-6 p-2'>
            <img
              src={avatar5}
              alt='Speaker 1'
              className='card-img-top mx-auto'
            />
            <div className='card-body'>
              <h3 className='card-title text-center pb-2'>Antonia Belarus</h3>
              <h5>
                Subject: <b>SQL Server</b>
              </h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                laudantium id magni impedit, quasi ullam qui maiores aliquid
                odio aut excepturi debitis, temporibus, quae facere perspiciatis
                aperiam amet! Dicta, qui?
              </p>
              <Link to='/'>
                <Button className='btn btn-primary text-uppercase'>
                  More info about speaker
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SpeakerContainer>
  );
};

export default Speakers;

const SpeakerContainer = styled.div`
  background: var(--deep-dark);
  padding: 1rem;

  .card {
    background: transparent;
    color: var(--white);
    border: 1px solid var(--dark-red);
    margin: 0.5rem;
  }

  .card-img-top {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  h3 {
    color: var(--yummy-burgundy);
    font-weight: bold;
  }
`;
