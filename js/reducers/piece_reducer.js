import { RECEIVE_PIECE } from '../actions/piece_actions';

const PieceReducer = (piece = {}, action) => {
  switch (action.type) {
    case RECEIVE_PIECE:
      return action.piece;
    default:
      return piece;
  }
};

export default PieceReducer;
