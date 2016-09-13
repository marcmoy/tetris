import React from 'react';
import { Provider } from 'react-redux';
import Tetris from './tetris';

const Root = ({ store }) => (
  <Provider store={store}>
    <Tetris />
  </Provider>
);

export default Root;
