import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage} from './moduls/HomePage/HomePage';
import { BagPage } from './moduls/BagPage/BagPage';
import { NotFoundPage } from './moduls/NotFoundPage';
import { FavoritesPage } from './moduls/FavoritesPage';
import { AppProvider } from './AppContext.';
import { PhonesPage } from './moduls/PhonesPage/PhonesPage';
import { TabletsPage } from './moduls/TabletsPage';
import { AccessoriesPage } from './moduls/AccessoriesPage';
import { ProductDetailsPage } from './moduls/ProductDetailsPage';

export const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/phones/:phoneId" element={<ProductDetailsPage />} />
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/bag" element={<BagPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </AppProvider>
  );
};
