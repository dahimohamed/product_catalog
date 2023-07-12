import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage} from './moduls/HomePage/HomePage';
import { NotFoundPage } from './moduls/NotFoundPage';
import { FavoritesPage } from './moduls/FavoritesPage';
import { AppProvider } from './AppContext.';

export const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />

          <Route path="/home" element={<Navigate to="/" />} />
          <Route
            path="/favorites"
            element={
              <FavoritesPage />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </AppProvider>
  );
};
