import React from 'react';
import './Footer.scss'; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="logo" href="/"></a>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item ">
              <a href="#home" className="footer__link ">
                github
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                contacts
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                rights
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer__back-to-top">
          <p className="footer__icon-title">Back to top</p>
          <a
            onClick={() => {
              document.getElementById('top')?.scrollIntoView();
            }}
            className="footer__icon"
          ></a>
        </div>
      </div>
    </footer>
  );
};