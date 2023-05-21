import React, { useRef, useState, useEffect } from 'react';
import './ProductSlider.scss';
import { Phone, ProductCardList } from '../ProductCardList';
import classNames from 'classnames';

interface Props {
  products: Phone[];
  title: string;
}

export const ProductSlider: React.FC<Props> = ({ products, title }) => {
  const [isNextActive, setIsNextActive] = useState(false);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateScrollArrows();
    window.addEventListener('resize', updateScrollArrows);
    return () => {
      window.removeEventListener('resize', updateScrollArrows);
    };
  }, []);

  useEffect(() => {
    updateScrollArrows();
  }, [products]);

  const updateScrollArrows = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      setIsNextActive(container.scrollLeft < container.scrollWidth - container.clientWidth);
      setIsPrevActive(container.scrollLeft > 0);
    }
  };

  const handleScroll = () => {
    updateScrollArrows();
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="product-slider">
      <section className="new-phones-section">
        <h2 className="new-phones-section__title">{title}</h2>
        <div className="new-phones-section__icons">
          <div
            className={classNames('new-phones-section__icon new-phones-section__icon--left', {
              'new-phones-section__icon--isActive': isPrevActive,
            })}
            onClick={scrollLeft}
          />
          <div
            className={classNames('new-phones-section__icon new-phones-section__icon--right', {
              'new-phones-section__icon--isActive': isNextActive,
            })}
            onClick={scrollRight}
          />
        </div>
      </section>

      <ProductCardList scrollRef={scrollRef} products={products} onScroll={handleScroll} />
    </div>
  );
};
