import React, { useCallback, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import cn from 'classnames';
import './HomePage.scss';
import { ProductSlider } from '../../components/ProductSlider';
import dataFromServer from '../../api/phones.json';
import { Phone } from '../../components/ProductCardList';
import { Link } from 'react-router-dom';
// import { ProductCardList } from '../../components/ProductCardList';

enum Direction {
  Prev = 'prev',
  Next = 'next',
}

const newPhones: Phone[] = dataFromServer.slice(-8);
const hotPrices: Phone[] = dataFromServer.slice(0, 8).reverse();

export const HomePage = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const handleBannerChange = useCallback(
    (direction: Direction, index: number) => {
      if (direction === Direction.Prev) {
        if (index < 1) {
          setBannerIndex(2);
          return;
        }
        setBannerIndex(currentIndex => currentIndex - 1);
      } else {
        if (index > 1) {
          setBannerIndex(0);
          return;
        }
        setBannerIndex(currentIndex => currentIndex + 1);
      }
    },
    []
  );

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setBannerIndex((currentIndex) => {
        if (currentIndex < 1) {
          return 2;
        }

        return currentIndex - 1;
      }),
    onSwipedRight: () =>
      setBannerIndex((currentIndex) => {
        if (currentIndex > 1) {
          return 0;
        }

        return currentIndex + 1;
      }),
  });

  const [brandNewPhones, setBrandNewPhones] = useState<Phone[]>([]);
  const [hotPricesPhones, setHotPricesPhones] = useState<Phone[]>([]);

  useEffect(() => {
    setBrandNewPhones(newPhones);
    setHotPricesPhones(hotPrices);
  }, []);

  return (
    <div className="home">
      <h1 className="home__title">Welcome to Nice Gadgets store!</h1>

      <div className="home__banner">
        <div
          className="home__banner-icon"
          onClick={() => {
            handleBannerChange(Direction.Prev, bannerIndex);
          }}
        >
          <div className="home__icon home__icon--left" />
        </div>

        <div
          {...handlers}
          className={cn('home__banner-image', {
            'home__banner-image--first': bannerIndex === 0,
            'home__banner-image--second': bannerIndex === 1,
            'home__banner-image--third': bannerIndex === 2,
          })}
        />

        <div
          className="home__banner-icon"
          onClick={() => {
            handleBannerChange(Direction.Next, bannerIndex);
          }}
        >
          <div className="home__icon home__icon--right" />
        </div>
      </div>

      <div className="home__dots">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={cn('home__dot', {
              'home__dot--active': bannerIndex === index,
            })}
            onClick={() => setBannerIndex(index)}
          />
        ))}
      </div>

      <ProductSlider products={brandNewPhones} title="Brand new models" />

      <section className="shop-by-category">
        <h2 className="shop-by-category__title">Shop by category</h2>

        <div className="shop-by-category__content">
          <div className="shop-by-category__product">
            <Link to="/phones" className="shop-by-category__image shop-by-category__phones-image" />
            <h3 className="shop-by-category__name">Mobile phones</h3>
            <p className="shop-by-category__quantity">95 models</p>
          </div>

          <div className="shop-by-category__product">
            <Link to="/tablets" className="shop-by-category__image shop-by-category__tablets-image" />
            <h3 className="shop-by-category__name">Tablets</h3>
            <p className="shop-by-category__quantity">24 models</p>
          </div>
          
          <div className="shop-by-category__product">
            <Link
              to="/accessories"
              className="shop-by-category__image shop-by-category__accessories-image"
            />
            <h3 className="shop-by-category__name">Accessories</h3>
            <p className="shop-by-category__quantity">100 models</p>
          </div>
        </div>
      </section>

      <ProductSlider products={hotPricesPhones} title="Hot prices" />
    </div>
  );
};
