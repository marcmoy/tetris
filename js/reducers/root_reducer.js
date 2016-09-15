import { combineReducers } from 'redux';
import BoardReducer from './board_reducer';
import PieceReducer from './piece_reducer';
import QueueReducer from './queue_reducer';

const RootReducer = combineReducers({
  board: BoardReducer,
  piece: PieceReducer,
  queue: QueueReducer
});

export default RootReducer;
