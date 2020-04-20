import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <NavbarContainer>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          <span>😎</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/speakers'>
                Speakers
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/events'>
                Events
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.nav`
  nav {
    background: var(--yummy-burgundy) !important;
  }

  .navbar-brand {
    font-size: 40px;
  }

  .nav-link {
    color: var(--white) !important;

    &:hover {
      background: var(--tomato) !important;
    }
  }

  .active {
    background: var(--tomato) !important;
  }
`;
