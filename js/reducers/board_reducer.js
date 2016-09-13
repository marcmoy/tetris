import { RECEIVE_PIECE } from '../actions/board_actions';
import { addPiece } from '../util/render_board';

const BoardReducer = function(board = {}, action){

  switch (action.type) {
    case RECEIVE_PIECE:
      let newBoard = addPiece(board, action.piece);
      return Object.assign({}, board, { newBoard });
    default:
      return board;
  }
};

export default BoardReducer;
