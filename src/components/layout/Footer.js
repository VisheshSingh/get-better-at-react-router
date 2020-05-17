import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterContainer>
      <div className='container-fluid'>
        <div className='row pt-5'>
          {/* Column 1 */}
          <div className='col-sm-3 col-xs-12 d-flex'>
            <ul className='list-inline mx-auto justify-content-center'>
              <Link to='/'>
                <li>Lorem ipsum</li>
              </Link>
              <Link to='/'>
                <li>Lorem ipsum</li>
              </Link>
              <Link to='/'>
                <li>Lorem ipsum</li>
              </Link>
            </ul>
          </div>
          {/* Column 2 */}
          <div className='col-sm-3 col-xs-12 d-flex'>
            <ul className='list-inline mx-auto justify-content-center'>
              <Link to='/'>
                <li>star wars ipsum</li>
              </Link>
              <Link to='/'>
                <li>star wars ipsum</li>
              </Link>
              <Link to='/'>
                <li>star wars ipsum</li>
              </Link>
            </ul>
          </div>
          {/* Column 3 */}
          <div className='col-sm-3 col-xs-12 d-flex'>
            <ul className='list-inline mx-auto justify-content-center'>
              <Link to='/'>
                <li>marvel ipsum</li>
              </Link>
              <Link to='/'>
                <li>marvel ipsum</li>
              </Link>
              <Link to='/'>
                <li>marvel ipsum</li>
              </Link>
            </ul>
          </div>
          {/* Column 4 */}
          <div className='col-sm-3 col-xs-12 d-flex'>
            <ul className='list-inline mx-auto justify-content-center'>
              <Link to='/'>
                <li>ninja ipsum</li>
              </Link>
              <Link to='/'>
                <li>ninja ipsum</li>
              </Link>
              <Link to='/'>
                <li>ninja ipsum</li>
              </Link>
            </ul>
          </div>
          <div className='pt-3 pb-2 pl-5 copy-right text-center'>
            <span role='img' aria-labelledby='crown'>
              &nbsp; 👑 {new Date().getFullYear()}&nbsp; &copy; All Rights
            </span>
            Reserved.
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background: var(--deep-dark);
  border-top: 1px solid var(--yummy-burgundy);

  ul li {
    list-style: none;
  }

  a {
    color: var(--dark);
    text-decoration: none;
    &:hover {
      color: var(--yummy-burgundy);
      text-decoration: none;
    }
  }

  .copy-right {
    width: 100%;
    color: var(--yummy-burgundy);
  }
`;
