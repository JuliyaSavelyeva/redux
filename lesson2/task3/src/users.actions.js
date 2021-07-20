export const addUser = user => ({
  type: 'ADD',
  payload: user,
});

export const deleteUser = userId => ({
  type: 'DELETE',
  payload: userId,
});
