import { RECEIVE_PIECE, RESET_PIECE } from '../actions/piece_actions';
import { randomPiece } from '../util/piece_types';

const PieceReducer = (piece = {}, action) => {
  switch (action.type) {
    case RECEIVE_PIECE:
      return action.piece;
    case RESET_PIECE:
      return randomPiece();
    default:
      return piece;
  }
};

export default PieceReducer;
