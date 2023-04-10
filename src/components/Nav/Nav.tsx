import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './Nav.scss';

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

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {headerTabs.map((tab) => {
          const { id, path, name } = tab;

          return (
            <li key={id} className="nav__item ">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  cn('nav__link', {
                    'nav__link--is-active': isActive,
                  })
                }
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};