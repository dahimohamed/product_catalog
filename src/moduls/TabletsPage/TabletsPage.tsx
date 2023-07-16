import React from 'react';
import { CartDialog } from '../../components/CartDialog';

export const TabletsPage = () => (
  <div className="tablets-page">
    <CartDialog
      open={true}
      title="Opps this page is under development!"
      description=" "
    />
  </div>
);
