import { UPDATE_BOARD } from '../actions/board_actions';
import { addPiece } from '../util/render_board';

const BoardReducer = function(board = {}, action){

  switch (action.type) {
    case UPDATE_BOARD:
      let newBoard = addPiece(board, action.piece);
      return Object.assign({}, board, { newBoard });
    default:
      return board;
  }
};

export default BoardReducer;
