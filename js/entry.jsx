import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const screen = document.getElementById('screen');
  ReactDOM.render(<Root store={store} />, screen);
});
