import React from 'react';
import styled from 'styled-components';
import Navbar from '../layout/Navbar';

function Home() {
  return (
    <MainContainer>
      <div className='home-main-container'>
        <Navbar />
        <div className='container'>
          <h1 className='display-5 text-uppercase text-center py-5'>
            Welcome to JavaScript 2020 conference
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus
            dolor, aliquam mollitia, doloribus dolorem nam accusamus hic, nobis
            corporis minima omnis. Enim provident possimus ab? Accusantium
            corrupti sequi numquam. Placeat laudantium qui ducimus eaque
            perferendis provident animi quo saepe. Nostrum ipsa sunt aut
            deleniti corporis totam reprehenderit adipisci ut neque voluptas
            alias, excepturi, iusto minima, assumenda beatae consequatur
            laudantium?
          </p>
          <div className='form-box'>
            <h3 className='display-6 text-uppercase text-center py-3'>
              register and reserve your seat
            </h3>
            <form>
              <div className='form-row mr-auto'>
                <div className='col-md-6 mb-4'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='First name'
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Last name'
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <input
                    type='tel'
                    className='form-control'
                    placeholder='Phone number'
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <button className='btn btn-primary text-uppercase'>
                  register your seat
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default Home;

// STYLED COMPONENTS
const MainContainer = styled.div`
  p {
    color: var(--white);
  }

  h1,
  h3 {
    color: var(--dark-red);
  }

  .form-box {
    padding: 6rem 0;
  }

  form {
    margin: 0 auto;
  }

  button {
    width: 100%;
    background: transparent;
    border: 2px solid var(--dark-red);

    &:hover {
      background: var(--dark-red);
      border-color: var(--dark-red);
    }
  }
`;
