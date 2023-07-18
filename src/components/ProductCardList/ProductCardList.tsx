import React, { RefObject } from 'react';
import './ProductCardList.scss';
import { ProductCard } from '../ProductCard/PorductCard';
import { Phone } from '../../types/phones';
import classNames from 'classnames';

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
  const handleScroll = () => {
    if (onScroll) {
      onScroll();
    }
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
          />
        );
      })}
    </div>
  );
};
