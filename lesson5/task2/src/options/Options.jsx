import React from 'react';

const Options = ({ title, options, moveOption }) => (
  <div className="options">
    <div className="options__title">{title}</div>
    <ul className="options__list">
      {options.map(option => (
        <li key={option.id}>
          <button onClick={() => moveOption(option.id)} className="options__list-item">
            {option.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Options;

// <!-- TransferList -->
// <div class="transfer-list">
//   <!-- AvailableOption -->
//   <!-- Options -->
//
//   <!-- SelectedOption -->
//   <!-- Options -->
//   <div class="options">
//     <div class="options__title">Selected options</div>
//     <ul class="options__list">
//       <li><button class="options__list-item">Leather-trimmed Sport Seats</button></li>
//       <li><button class="options__list-item">Daytime running lights</button></li>
//     </ul>
//   </div>
// </div>
