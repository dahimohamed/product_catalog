import React from 'react';
import './Footer.scss'; 

const footerLinks = [
  {
    id: 1,
    url: 'https://github.com/dahimohamed/product_catalog',
    name: 'Github'
  },
  {
    id: 2,
    url: '/',
    name: 'Contacts'
  },
  {
    id: 3,
    url: '/',
    name: 'Rights'
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="logo" href="/" />
        <nav className="footer__nav">
          <ul className="footer__list">
            {footerLinks.map(link => {
              const { id, url, name } = link;

              return (
                <li key={id} className="footer__item ">
                  <a href={url} className="footer__link ">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="footer__back-to-top">
          <p className="footer__icon-title">Back to top</p>
          <a
            onClick={() => {
              document.getElementById('top')?.scrollIntoView();
            }}
            className="footer__icon"
          />
        </div>
      </div>
    </footer>
  );
};
