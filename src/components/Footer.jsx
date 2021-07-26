import React from 'react';

export const Footer = () => {
  return (
    <footer className='page-footer grey darken-3'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a className='grey-text text-lighten-4 right' target='_blank' rel='noreferrer' href='https://github.com/kolan4ik/react-shop'>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
