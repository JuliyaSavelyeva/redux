import { createSelector } from 'reselect';

export const optionsListSelector = state => state.options.optionsList;
export const optionsSelectedSelector = state => state.options.selected;

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, optionsSelectedSelector],
  (allOptionsList, selectedIds) => allOptionsList.filter(option => selectedIds.includes(option.id)),
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, optionsSelectedSelector],
  (allOptionsList, selectedIds) =>
    allOptionsList.filter(option => !selectedIds.includes(option.id)),
);

// export const selectedOptionsSelector = state => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = optionsSelectedSelector(state);

//   return allOptionsList.filter(option => selectedIds.includes(option.id));
// };

// export const availableOptionsSelector = state => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = optionsSelectedSelector(state);

//   return allOptionsList.filter(option => !selectedIds.includes(option.id));
// };
