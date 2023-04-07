import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header" id="top">
      <a className="logo" href="/"></a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item ">
            <NavLink
              to="/home"
              className={({ isActive}) => (
                cn(
                  'nav__link',
                  {
                    'nav__link--is-active': isActive,
                  }
                )
              )}
            >
              home
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/phones"
              className={({ isActive}) => (
                cn(
                  'nav__link',
                  {
                    'nav__link--is-active': isActive,
                  }
                )
              )}
            >
              phones
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/tablets"
              className={({ isActive}) => (
                cn(
                  'nav__link',
                  {
                    'nav__link--is-active': isActive,
                  }
                )
              )}
            >
              tablets
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/accessories"
              className={({ isActive}) => (
                cn(
                  'nav__link',
                  {
                    'nav__link--is-active': isActive,
                  }
                )
              )}
            >
              accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header__icons">
        <a className="icon icon--heart-like"></a>
        <a className="icon icon--shopping-bag"></a>
        <a className="icon--menu"></a>
      </div>
    </header>
  );
};