import React from 'react';
import { CartDialog } from '../../components/CartDialog';

export const AccessoriesPage = () => (
  <div className="accessories-page">
    <CartDialog
      open={true}
      title="Opps this page is under development!"
      description=" "
    />
  </div>
);
