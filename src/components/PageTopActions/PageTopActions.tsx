import React from 'react';
import './PageTopActions.scss';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/phones';

interface Props {
  title: string;
  products: Phone[];
}

export const PageTopActions: React.FC<Props> = ({title, products}) => {
  return (
    <div className="top-actions">
      <div className="top-actions__paths">
        <Link className="top-actions__path-home" to="/"></Link>

        <div className="top-actions__icon top-actions__icon--right-arrow"></div>

        <div className="top-actions__path-main">{ title ? 'phones' : title}</div>
      </div>

      <h1 className="top-actions__title">{ title}</h1>

      <div className="top-actions__count">{`${products.length} items`}</div>
    </div>
  );
};
