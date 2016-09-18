import { UPDATE_BOARD, RECEIVE_BOARD, RESET_BOARD }
  from '../actions/board_actions';
import { addPiece, renderPreview } from '../util/render_board';
import { initialBoard } from '../store/store';

const BoardReducer = function( board = {}, action){

  switch (action.type) {
    case UPDATE_BOARD:
      let newBoard = addPiece(board, action.piece);
      let previewBoard = renderPreview(newBoard, action.piece);
      return Object.assign({}, previewBoard);
    case RECEIVE_BOARD:
      return action.board;
    case RESET_BOARD:
      return initialBoard();
    default:
      return board;
  }
};

export default BoardReducer;
