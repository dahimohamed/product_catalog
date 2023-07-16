import React, { useState, useEffect, useContext } from 'react';
import './BagPage.scss';
import { Link } from 'react-router-dom';
import { CartList } from '../../components/CartList/CartList';
import { AppContext } from '../../AppContext.';
import { CartDialog } from '../../components/CartDialog';

type Props = {
  clearCart?: () => void;
};

export const BagPage: React.FC<Props> = () => {
  const { cartItems } = useContext(AppContext);
  const [totalQuantity, setTotalQuantity] = useState(cartItems.length);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    setTotalQuantity(cartItems.length);

    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
      const product = cartItems[i];
      total += product.price;
    }

    setTotalPrice(total);
  }, [cartItems]);

  return (
    <div className="cart">
      <Link to="/phones" className="cart__back">
        <div className="cart__icon cart__icon--left-arrow"></div>

        <div className="cart__back-text">Back</div>
      </Link>

      <h2 className="cart__title">Cart</h2>

      {cartItems.length > 0 ? (
        <div className="cart__details">
          <div className="cart__list">
            <CartList onSetTotal={setTotalPrice} onSetTotalQuantity={setTotalQuantity} />
          </div>

          <div className="cart__info">
            <h2 className="cart__price">{`$${totalPrice}`}</h2>

            <div className="cart__text">
              {`Total for ${totalQuantity} items`}
            </div>

            <div className="cart__divider"></div>

            <button
              type="submit"
              className="cart__block-total-button"
              onClick={handleOpen}
            >
              Checkout
            </button>
          </div>

          <CartDialog open={open} handleClose={handleClose} />
        </div>
      ) : (
        <div className="cart__empty">No card was added yet</div>
      )}
    </div>
  );
};
