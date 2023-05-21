import React, { RefObject } from 'react';
import './ProductCardList.scss';


import { ProductCard } from '../ProductCard/PorductCard';

export interface Phone {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  capacity: string;
  color: string;
  fullPrice: number;
  image: string;
  price: number;
  ram: string;
  screen: string;
  year: number;
}

 
interface Props {
  scrollRef: RefObject<HTMLDivElement>;
  products: Phone[];
  onScroll?: () => void;
}

export const ProductCardList: React.FC<Props> = ({
  scrollRef,
  products,
  onScroll,
}) => {
  const handleScroll = () => {
    if (onScroll) {
      onScroll();
    }
  };

  return (
    <div className="product-card-list" ref={scrollRef} onScroll={handleScroll}>
      {products.map((product: Phone) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
