import React, { useEffect, useState } from 'react';
import './ProductCardList.scss';

import dataFromServer from '../../api/phones.json';
import { ProductCard } from '../ProductCard/PorductCard';

export interface Phone {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  capacity: string;
  color: string;
  fullPrice: number;
  image: string;
  price: number;
  ram: string;
  screen: string;
  year: number;
}
const newPhones: Phone[] = dataFromServer.slice(-8);
 
interface Props {
  scrollRef: React.RefObject<HTMLDivElement>,
}


export const ProductCardList: React.FC<Props> = ({scrollRef}) => {
  const [brandNewPhones, SetBrandNewPhones] = useState<Phone[]>([]);

  useEffect(() => {
    SetBrandNewPhones(newPhones);
  }, []);
  
  return (
    <div
      className="product-card-list"
      ref={scrollRef}
    >
      {brandNewPhones.map((brandNewPhone: Phone) => {
        return (
          <ProductCard key={brandNewPhone.id} brandNewPhone={brandNewPhone} />
        );
      })}
    </div>
  );
};
