import { createStore } from 'redux';
import { RootReducer } from '../reducers/root_reducer';

const preloadedState = {
  board: {},
  fallingPiece: {}
};

const configureStore = () => (
  createStore(
    RootReducer,
    preloadedState
  )
);

export default configureStore;
