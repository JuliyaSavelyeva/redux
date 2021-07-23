import { createSelector } from 'reselect';

export const usersSelector = state => state.users.usersList;
export const filterTextSelector = state => state.users.filterText;

export const filteredUsersList = createSelector(
  [usersSelector, filterTextSelector],
  (users, filterText) =>
    users.filter(user => user.name.toLowerCase().includes(filterText.toLowerCase())),
);
