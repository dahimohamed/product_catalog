import React, { useCallback, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import cn from 'classnames';
import './HomePage.scss';

enum Direction {
  Prev = 'prev',
  Next = 'next',
}

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
          <div className="home__icon home__icon--left"></div>
        </div>

        <div
          {...handlers}
          className={cn('home__banner-image', {
            'home__banner-image--first': bannerIndex === 0,
            'home__banner-image--second': bannerIndex === 1,
            'home__banner-image--third': bannerIndex === 2,
          })}
        ></div>

        <div
          className="home__banner-icon"
          onClick={() => {
            handleBannerChange(Direction.Next, bannerIndex);
          }}
        >
          <div className="home__icon home__icon--right"></div>
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
          ></div>
        ))}
      </div>
    </div>
  );
};
