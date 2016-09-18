import { combineReducers } from 'redux';
import BoardReducer from './board_reducer';
import PieceReducer from './piece_reducer';
import QueueReducer from './queue_reducer';
import GameStateReducer from './game_state_reducer';

const RootReducer = combineReducers({
  board: BoardReducer,
  piece: PieceReducer,
  queue: QueueReducer,
  gamestate: GameStateReducer
});

export default RootReducer;
