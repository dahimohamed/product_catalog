import React, { useContext } from 'react';
import './FavoritesPage.scss';
import { Link } from 'react-router-dom';
import { ProductCardList } from '../../components/ProductCardList';
import { AppContext } from '../../AppContext.';

export const FavoritesPage: React.FC = () => {
  const { favoriteItems } =
    useContext(AppContext);

  return (
    <div className="favorites">
      <div className="favorites__paths">
        <Link className="favorites__path-home" to="/"></Link>

        <div className="favorites__icon favorites__icon--right-arrow"></div>

        <Link className="favorites__path-main" to="/favorites">
          Favorites
        </Link>
      </div>

      <h1 className="favorites__title">Favorites</h1>

      <div className="favorites__count">{`${favoriteItems.length} items`}</div>

      <ProductCardList
        products={favoriteItems}
        title="favorites"
      />
    </div>
  );
};
