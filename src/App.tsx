import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
};
