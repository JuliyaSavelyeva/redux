import React from 'react';
import { Provider } from 'react-redux';
import Weather from './weather/Weather.jsx';
import store from './store.js';

const App = () => (
  <Provider store={store}>
    <Weather></Weather>
  </Provider>
);

export default App;
