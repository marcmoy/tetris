import { UPDATE_BOARD, RECEIVE_BOARD } from '../actions/board_actions';
import { addPiece, renderPreview } from '../util/render_board';

const BoardReducer = function( board = {}, action){

  switch (action.type) {
    case UPDATE_BOARD:
      let newBoard = addPiece(board, action.piece);
      let previewBoard = renderPreview(newBoard, action.piece);
      return Object.assign({}, previewBoard);
    case RECEIVE_BOARD:
      return action.board;
    default:
      return board;
  }
};

export default BoardReducer;
