import { FilterBy } from '../types/filterBy';
import { Phone } from '../types/phones';

export const filterProducts = (phones: Phone[], filterBy: FilterBy | string) => {
  switch (filterBy) {
  case FilterBy.Alph:
    return [...phones].sort((a, b) => a.name.localeCompare(b.name));

  case FilterBy.Newest:
    return [...phones].sort((a, b) => b.year - a.year);

  case FilterBy.Cheapest:
    return [...phones].sort((a, b) => a.price - b.price);

  default:
    return [...phones];
  }
};
