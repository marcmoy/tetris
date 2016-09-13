import { combineReducers } from 'redux';
import BoardReducer from './board_reducer';
import PieceReducer from './piece_reducer';

const RootReducer = combineReducers(
  BoardReducer,
  PieceReducer
);

export default RootReducer;
