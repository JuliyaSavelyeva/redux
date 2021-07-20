import store, { increment, decrement, reset } from './store.js';

import './index.scss';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const value = state.history.reduce((acc, val) => acc + val, 0);
  const history = state.history.map(number => (number > 0 ? `+${number}` : number));
  resultElem.textContent = state.history.length === 0 ? '' : `${history.join('')} = ${value}`;
});
