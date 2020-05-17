import React from 'react';
import avatar1 from '../../assets/speaker1.png';
// import avatar2 from '../../assets/speaker2.png';
// import avatar3 from '../../assets/speaker3.png';
// import avatar4 from '../../assets/speaker4.png';
// import avatar5 from '../../assets/speaker5.png';
import { Link } from 'react-router-dom';
import Button from '../layout/Button';

const Speakers = () => {
  return (
    <>
      <div className='container'>
        <div className='row mx-auto justify-content-center'>
          <div className='card col-md-6 p-2'>
            <img src={avatar1} alt='Speaker 1' />
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
        </div>
      </div>
    </>
  );
};

export default Speakers;
