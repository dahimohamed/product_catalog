/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { type ReactNode, useCallback, useMemo, useState } from 'react';
import { Phone } from './types/phones';
import dataFromServer from './api/phones.json';

interface ProviderProps {
  children: ReactNode
}

interface AppContextType {
  favoriteItems: Phone[];
  setFavoriteItems: (phone: Phone[]) => void;
  cartItems: Phone[];
  setCartItems: (phone: Phone[]) => void;
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export const AppContext = React.createContext<AppContextType>({
  favoriteItems: [],
  cartItems: [],
  setFavoriteItems: () => {},
  setCartItems: () => {},
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState<Phone[]>([]);
  const [cartItems, setCartItems] = useState<Phone[]>([]);
 
  const addToFavorites = useCallback(
    (id: string) => {
      const foundFavoriteItem = dataFromServer.find(
        (product) => product.id === id
      );

      if (foundFavoriteItem) {
        setFavoriteItems((current) => [...current, foundFavoriteItem]);
      }
    },
    []
  );

  const addToCart = useCallback(
    (id: string) => {
      const foundItem = dataFromServer.find(
        (product) => product.id === id
      );

      if (foundItem) {
        setCartItems((current) => [...current, foundItem]);
      }
    },
    []
  );

  const removeFromFavorites = useCallback(
    (id: string) => {
      const filteredFavoriteItems = favoriteItems.filter(
        (item) => item.id !== id
      );

      setFavoriteItems(filteredFavoriteItems);
    },
    [favoriteItems]
  );

  const removeFromCart = useCallback(
    (id: string) => {
      const filteredCartItems = cartItems.filter(
        (item) => item.id !== id
      );

      setCartItems(filteredCartItems);
    },
    [favoriteItems]
  );
 
  const context = useMemo(
    () => ({
      favoriteItems,
      setFavoriteItems,
      addToFavorites,
      removeFromFavorites,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
    }),
    [favoriteItems, cartItems]
  );

  return (
    <AppContext.Provider value={context} >
      {children}
    </AppContext.Provider>
  );
};
