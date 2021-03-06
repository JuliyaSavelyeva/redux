import React from 'react';

const Filter = ({ filterText, count, onChange }) => (
  <div className="filter">
    <span className="filter__count">{count}</span>
    <input
      type="text"
      className="filter__input"
      onChange={e => onChange(e.target.value)}
      value={filterText}
    />
  </div>
);

export default Filter;
