import React, { useRef } from 'react';
import './ProductSlider.scss';
import { Phone, ProductCardList } from '../ProductCardList';

interface Props {
  products: Phone[],
  title: string,
}

export const ProductSlider: React.FC<Props> = ({products, title}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scroll({
      left: scrollRef.current.scrollLeft - 300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scroll({
      left: scrollRef.current.scrollLeft + 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="product-slider">
      <section className="new-phones-section">
        <h2 className="new-phones-section__title">{ title }</h2>
        <div className="new-phones-section__icons">
          <div
            className="new-phones-section__icon new-phones-section__icon--left"
            onClick={scrollRight}
          />
          <div
            className="new-phones-section__icon new-phones-section__icon--right"
            onClick={scrollLeft}
          />
        </div>
      </section>

      <ProductCardList scrollRef={scrollRef} products={products} />
    </div>
  );
};
