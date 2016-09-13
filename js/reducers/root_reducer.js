import { combineReducers } from 'redux';
import BoardReducer from './board_reducer';
import PieceReducer from './piece_reducer';

const RootReducer = combineReducers({
  board: BoardReducer,
  piece: PieceReducer
});

export default RootReducer;
