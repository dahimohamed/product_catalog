/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { type ReactNode, useCallback, useMemo, useState, useEffect } from 'react';
import { Phone } from './types/phones';
import phoneProductsFromServer from './api/phones.json';

interface ProviderProps {
  children: ReactNode
}

interface AppContextType {
  phoneProducts: Phone[];
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
  phoneProducts: [],
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
  const [phoneProducts, setPhoneProducts] = useState<Phone[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<Phone[]>([]);
  const [cartItems, setCartItems] = useState<Phone[]>([]);

  useEffect(() => {
    setPhoneProducts(phoneProductsFromServer);
  }, []);
 
  const addToFavorites = useCallback(
    (id: string) => {
      const foundFavoriteItem = phoneProductsFromServer.find(
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
      const foundItem = phoneProductsFromServer.find(
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
    [cartItems]
  );
 
  const context = useMemo(
    () => ({
      phoneProducts,
      favoriteItems,
      setFavoriteItems,
      addToFavorites,
      removeFromFavorites,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
    }),
    [phoneProducts, favoriteItems, cartItems]
  );

  return (
    <AppContext.Provider value={context} >
      {children}
    </AppContext.Provider>
  );
};
