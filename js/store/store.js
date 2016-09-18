import { createStore } from 'redux';
import { randomPiece } from '../util/piece_types';
import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middleware/root_middleware';

export const initialBoard = () => {
  let board = {};
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
      board[`${i},${j}`] = { className: 'empty' };
    }
  }
  return board;
};

const preloadedState = {
  board: initialBoard(),
  piece: randomPiece(),
  queue: randomPiece(),
  gamestate: {
    on: false,
    gameover: false,
    pause: false
  }
};

const configureStore = () => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
);

export default configureStore;
