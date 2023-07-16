import React from 'react';
import Dialog from '@mui/material/Dialog';
import { NavLink } from 'react-router-dom';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import './CartDialog.scss';

type Props = {
  open: boolean;
  handleClose?: () => void;
  title?: string;
  description?: string;
};

export const CartDialog: React.FC<Props> = ({ open, handleClose, title, description }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">{title ? title : 'Сongratulations!'}</DialogTitle>

      <DialogContent id="dialog-content">
        <DialogContentText className="dialog-description">
          {description ? description : 'Your purchase is successful.'}
          Thank you for using our store. Do you
          want to continue shopping or go to the home page?
        </DialogContentText>
      </DialogContent>

      <DialogActions id="dialog-actions">
        <NavLink to="/home" id="dialog-actions__link">
          Home page
        </NavLink>

        <NavLink to="/phones" id="dialog-actions__link">
          Continue shopping
        </NavLink>
      </DialogActions>
    </Dialog>
  );
};
