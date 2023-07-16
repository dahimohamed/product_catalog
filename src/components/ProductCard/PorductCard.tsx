import React, { useContext } from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Phone } from '../../types/phones';
import { AppContext } from '../../AppContext.';

interface Props {
  product: Phone;
  title?: string;
  alreadyInFavorites: boolean | undefined;
  alreadyInCart: boolean | undefined;
}

export const ProductCard: React.FC<Props> = ({
  product,
  title,
  alreadyInFavorites,
  alreadyInCart,
}) => {
  const { id, name, capacity, image, price, ram, screen, fullPrice } = product;
  const { addToFavorites, removeFromFavorites, addToCart, removeFromCart } = useContext(AppContext);

  return (
    <div className="product-card">
      <div className="product-crad__content">
        <Link to="/phones" className="product-card__image-container">
          <img
            className="product-card__image"
            src={require(`../../images/${image}`)}
            alt={name}
          />
        </Link>
        <Link to="/phones" className="product-card__title-container">
          <p className="product-card__title">{`${name} (MQ023)`}</p>
        </Link>

        <div className="product-card__price-container">
          <p className="product-card__price">{`$${price}`}</p>
          <p
            className={classNames('product-card__full-price', {
              'product-card__full-price--isBrandNewPhones':
                title === 'Brand new models',
            })}
          >{`$${fullPrice}`}</p>
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
          <div
            className={classNames('card-button-selection', {
              'card-button-selection--is-added': alreadyInCart,
            })}
            onClick={() => {
              if (!alreadyInCart) {
                addToCart(id);
              } else {
                removeFromCart(id);
              }
            }}
          >
            {alreadyInCart ? (
              <div className="card-button__added">Added to cart</div>
            ) : (
              <div className="card-button__to-add">Add to cart</div>
            )}
          </div>
          <div
            className="card-button__favorite"
            onClick={() => {
              if (!alreadyInFavorites) {
                addToFavorites(id);
              } else {
                removeFromFavorites(id);
              }
            }}
          >
            <div
              className={classNames('card-button__favorite-icon', {
                'card-button__favorite-icon--isLiked': alreadyInFavorites,
              })}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
