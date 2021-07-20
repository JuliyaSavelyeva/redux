import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 84, name: 'Tom' }));
store.dispatch(addUser({ id: 64, name: 'Bob' }));
store.dispatch(addUser({ id: 1, name: 'Ann' }));
store.dispatch(addUser({ id: 2, name: 'Clara' }));
store.dispatch(deleteUser(76));
store.dispatch(deleteUser(84));

store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());
