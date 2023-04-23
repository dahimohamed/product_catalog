import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { Phone } from '../ProductCardList';

interface Props {
  brandNewPhone: Phone;
}

export const ProductCard: React.FC<Props> = ({ brandNewPhone }) => {
  const {
    name,
    capacity,
    image,
    price,
    ram,
    screen,
  } = brandNewPhone;

  return (
    <div className="product-card">
      <div className="product-crad__content">
        <Link to="/phones/1">
          <img
            className="product-card__image"
            src={require('../../images/img/phones/apple-iphone-14-pro/gold/00.png')}
            alt={name}
          />
        </Link>

        <p className="product-card__title">
          {`${name} (MQ023)`}
        </p>
        <p className="product-card__price">{`$${price}`}</p>
        <div className="product-card__description">
          <p className="product-card__description-title">Screen</p>
          <p className="product-card__description-content">{screen}</p>
        </div>
        <div className="product-card__description">
          <p className="product-card__description-title">Capacity</p>
          <p className="product-card__description-content">{capacity}</p>
        </div>
        <div className="product-card__description">
          <p className="product-card__description-title">RAM</p>
          <p className="product-card__description-content">{ram}</p>
        </div>

        <div className="card-button">
          <div className="card-button-link">
            <Link to="/bag" className="card-button__to-add">
              Add to cart
            </Link>
          </div>
          <div className="card-button__favorite">
            <Link to="/favorites" className="card-button__favorite-icon"></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
