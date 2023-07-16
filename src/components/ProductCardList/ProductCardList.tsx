import React, { RefObject, useContext } from 'react';
import './ProductCardList.scss';
import { ProductCard } from '../ProductCard/PorductCard';
import { Phone } from '../../types/phones';
import classNames from 'classnames';
import { AppContext } from '../../AppContext.';
 
interface Props {
  scrollRef?: RefObject<HTMLDivElement>;
  products: Phone[];
  onScroll?: () => void;
  title?: string;
}

export const ProductCardList: React.FC<Props> = ({
  scrollRef,
  products,
  onScroll,
  title,
}) => {
  const { favoriteItems, cartItems} = useContext(AppContext);
  const handleScroll = () => {
    if (onScroll) {
      onScroll();
    }
  };

  const checkIfAlreadyInFavorites = (id: string) => {
    return favoriteItems.some((item) => item.id === id);
  };

  const checkIfAlreadyInCart = (id: string) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className={classNames('product-card-list', {
      'product-card-list--favorites': title === 'no slider',
    })} ref={scrollRef} onScroll={handleScroll}>
      {products.map((product: Phone) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            title={title}
            alreadyInFavorites={checkIfAlreadyInFavorites(product.id)}
            alreadyInCart={checkIfAlreadyInCart(product.id)}
          />
        );
      })}
    </div>
  );
};
