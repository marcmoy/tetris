import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { randomPiece } from '../util/piece_types';

const initialBoard = () => {
  let board = {};
  let count = 0;
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
      board[count] = { className: 'empty', pos: [i, j] };
      count++;
    }
  }
  return board;
};

const preloadedState = {
  board: initialBoard(),
  piece: randomPiece()
};

const configureStore = () => (
  createStore(
    RootReducer,
    preloadedState
  )
);

export default configureStore;
