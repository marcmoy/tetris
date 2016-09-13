import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import FallingPiece from './components/piece/falling_piece';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore;

  const root = document.getElementById('root');
  ReactDOM.render(<FallingPiece/>, root);
});
