import React from 'react';
import AvailableOptions from './AvailableOptions.jsx';
import SelectedOptions from './SelectedOptions.jsx';

const TransferList = () => (
  <div className="transfer-list">
    <AvailableOptions title="Available option" />
    <SelectedOptions title="Selected option" />
  </div>
);

export default TransferList;
