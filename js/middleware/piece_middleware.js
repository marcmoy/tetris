import { STEP_PIECE, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, ROTATE_CW, ROTATE_CCW
 } from '../actions/piece_actions';
import { receivePiece } from '../actions/piece_actions';
import { nextPiece } from '../actions/piece_actions';
import movePiece from '../util/move_piece';
import { randomPiece } from '../util/piece_types';
import { updateBoard } from '../actions/board_actions';
import { addPiece } from '../util/render_board';
import { updateQueue } from '../actions/queue_actions';

const PieceMiddleware = ({getState, dispatch}) => next => action => {
  const piece = getState().piece;
  const board = getState().board;
  const success = (newBoard) => () => dispatch(updateBoard(newBoard));

  switch (action.type) {
    case STEP_PIECE:
      let stepPiece;
      if (piece.inPlay) {
        stepPiece = movePiece('down', piece, board);
        let newBoard = addPiece(board, stepPiece);
        dispatch(updateBoard(newBoard));
      } else {
        dispatch(updateQueue(randomPiece()));
      }
      break;
    case MOVE_LEFT:
      let leftPiece = movePiece('left', action.piece, board);
      // Object.assign({}, piece, { leftPiece });
      break;
    case MOVE_DOWN:
      let downPiece = movePiece('down', action.piece, board);
      // Object.assign({}, piece, { downPiece });
      break;
    case MOVE_RIGHT:
      let rightPiece = movePiece('right', action.piece, board);
      // Object.assign({}, piece, { rightPiece });
      break;
    // case ROTATE_CW:
    //   let cwPiece = rotatePiece('cw', action.piece);
    //   Object.assign({}, piece, { fallingPiece: cwPiece });
    //
    // case ROTATE_CCW:
    //   let ccwPiece = rotatePiece('ccw', action.piece);
    //   Object.assign({}, piece, { fallingPiece: ccwPiece });

    default:
      break;
  }
  return next(action);
};

export default PieceMiddleware;
