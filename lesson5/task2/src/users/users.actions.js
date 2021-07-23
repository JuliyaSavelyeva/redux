export const CHANGE_VALUE = 'USERS/CHANGE_VALUE';

export const changeValue = value => ({
  type: CHANGE_VALUE,
  payload: {
    value,
  },
});
