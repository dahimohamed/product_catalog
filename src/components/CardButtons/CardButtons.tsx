import classNames from 'classnames';
import React, { useContext } from 'react';
import './CardButtons.scss';
import { AppContext } from '../../AppContext.';
import { Phone } from '../../types/phones';
import { checkIfExists } from '../../utils/checkIfExists';

interface Props {
  product: Phone | undefined,
}

export const CardButtons: React.FC<Props> = ({product}) => {
  const { favoriteItems, cartItems, addToCart, removeFromCart, addToFavorites, removeFromFavorites } = useContext(AppContext);
  const alreadyInFavorites = checkIfExists(product?.id as string, favoriteItems);
  const alreadyInCart = checkIfExists(product?.id as string, cartItems);

  return (
    <div className="card-buttons">
      <div
        className={classNames('card-buttons-selection', {
          'card-buttons-selection--is-added': alreadyInCart,
        })}
        onClick={() => {
          if (!alreadyInCart) {
            addToCart(product?.id as string);
          } else {
            removeFromCart(product?.id as string);
          }
        }}
      >
        {alreadyInCart ? (
          <div className="card-buttons__added">Added to cart</div>
        ) : (
          <div className="card-buttons__to-add">Add to cart</div>
        )}
      </div>
      <div
        className="card-buttons__favorite"
        onClick={() => {
          if (!alreadyInFavorites) {
            addToFavorites(product?.id as string);
          } else {
            removeFromFavorites(product?.id as string);
          }
        }}
      >
        <div
          className={classNames('card-buttons__favorite-icon', {
            'card-buttons__favorite-icon--isLiked': alreadyInFavorites,
          })}
        ></div>
      </div>
    </div>
  );
};
