import store from './store.js';
import { increment, decrement, reset } from './counter.actions.js';
import { addUser, deleteUser, updateUser } from './users.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(reset());

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 84, name: 'Tom' }));
store.dispatch(addUser({ id: 64, name: 'Bob' }));
store.dispatch(addUser({ id: 1, name: 'Ann' }));
store.dispatch(addUser({ id: 2, name: 'Clara' }));
store.dispatch(deleteUser(76));
store.dispatch(updateUser(84, { name: 'Yuliya', age: 17 }));
