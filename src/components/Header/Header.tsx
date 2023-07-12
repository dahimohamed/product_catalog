import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../AppContext.';

type HeaderTabType = {
  id: number;
  path: string;
  name: string;
};

type HeaderTabsType = Array<HeaderTabType>;

const headerTabs: HeaderTabsType = [
  {
    id: 1,
    path: '/',
    name: 'home',
  },

  {
    id: 2,
    path: '/phones',
    name: 'phones',
  },

  {
    id: 3,
    path: '/tablets',
    name: 'tablets',
  },

  {
    id: 4,
    path: '/accessories',
    name: 'accessories',
  },
];

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { favoriteItems, cartItems } = useContext(AppContext);

  return (
    <header className="header" id="top">
      <div className="header__container">
        <a className="logo" href="/"></a>
        <nav
          className={classNames('nav', {
            'nav--is-active': isVisible,
          })}
        >
          <ul
            className={classNames('nav__list', {
              'nav__list--is-visible': isVisible,
            })}
          >
            {headerTabs.map((tab) => {
              const { id, path, name } = tab;
              return (
                <li key={id} className="nav__item">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      classNames('nav__link', {
                        'nav__link--is-active': isActive,
                      })
                    }
                    onClick={() => setIsVisible(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={classNames('header__icons', {
            'header__icons--is-visible': isVisible,
          })}
        >
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              classNames('icon icon--heart-like', {
                'icon--heart-like--is-active': isActive,
              })
            }
            onClick={() => setIsVisible(false)}
          >
            {favoriteItems.length > 0 && (
              <div className="icon__quantity">
                {favoriteItems?.length}
              </div>
            )}
          </NavLink>
          <NavLink
            to="/bag"
            className={({ isActive }) =>
              classNames('icon icon--shopping-bag', {
                'icon--shopping-bag--is-active': isActive,
              })
            }
            onClick={() => setIsVisible(false)}
          >
            {cartItems.length > 0 && (
              <div className="icon__quantity">
                {cartItems.length}
              </div>
            )}
          </NavLink>
        </div>
        <a
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          className={classNames('icon--menu', {
            'icon--menu-cross': isVisible,
          })}
        />
      </div>
    </header>
  );
};
