import React from 'react';
import { Provider } from 'react-redux';
import GameContainer from './game/game_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <GameContainer />
  </Provider>
);

export default Root;
