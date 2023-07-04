import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { Phone } from '../ProductCardList';
import classNames from 'classnames';

interface Props {
  product: Phone;
  title: string,
}

export const ProductCard: React.FC<Props> = ({ product, title }) => {
  const { name, capacity, image, price, ram, screen, fullPrice, } = product;

  return (
    <div className="product-card">
      <div className="product-crad__content">
        <Link to="/phones/1" className="product-card__image-container">
          <img
            className="product-card__image"
            src={require(`../../images/${image}`)}
            alt={name}
          />
        </Link>
        <Link to="/phones/1" className="product-card__title-container">
          <p className="product-card__title">{`${name} (MQ023)`}</p>
        </Link>

        <div className="product-card__price-container">
          <p className="product-card__price">{`$${price}`}</p>
          <p className={classNames('product-card__full-price', {
            'product-card__full-price--isBrandNewPhones': title === 'Brand new models',
          })}>{`$${fullPrice}`}</p>
        </div>
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
