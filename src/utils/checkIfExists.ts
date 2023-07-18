import { Phone } from '../types/phones';

export const checkIfExists = (id: string, products: Phone[]) => {
  return products.some((product) => product.id === id);
};
