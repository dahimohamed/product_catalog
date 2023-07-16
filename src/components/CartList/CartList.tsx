import React, { useContext } from 'react';
import { CartItem } from '../CartItem';
import './CartList.scss';
import { AppContext } from '../../AppContext.';

interface Props {
  onSetTotal: (price: number) => void;
  onSetTotalQuantity: (price: number) => void;
}

export const CartList: React.FC<Props> = ({ onSetTotal, onSetTotalQuantity }) => {
  const { cartItems, removeFromCart } = useContext(AppContext);

  return (
    <div className="cartlist">
      {cartItems.map((product) => (
        <div key={product.id} className="cartlist__item">
          <CartItem
            product={product}
            onRemove={removeFromCart}
            onSetTotal={onSetTotal}
            onSetTotalQuantity={onSetTotalQuantity}
          />
        </div>
      ))}
    </div>
  );
};
