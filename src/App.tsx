import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route
          path='/home'
          element={<h1>Home page</h1>}
        />

      </Routes>
      <Footer />
    </div>
  );
};
