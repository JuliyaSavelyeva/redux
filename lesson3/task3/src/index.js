import store from './store.js';
import { setLanguage } from './language.actions.js';
import { addProduct, removeProduct } from './cart.actions.js';
import { setUser, removeUser } from './user.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage('ru'));
store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'tomato' }));
store.dispatch(addProduct({ id: 3, name: 'cheese' }));
store.dispatch(removeProduct(3));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());
