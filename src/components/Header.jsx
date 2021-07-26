import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

export const Header = () => {
  return (
    <nav className='grey darken-3'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          <img width='50' height='50' src={logo} className='App-logo' alt='logo' /> Shop
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/kolan4ik/react-shop'>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
