import { STEP_PIECE, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, ROTATE_CW, ROTATE_CCW
 } from '../actions/piece_actions';
import { receivePiece } from '../actions/board_actions';
import movePiece from '../util/move_piece';

const PieceMiddleware = ({getState, dispatch}) => next => action => {
  const piece = getState().piece;

  switch (action.type) {
    case STEP_PIECE:
      let stepPiece = movePiece('down', piece);
      dispatch(receivePiece(piece));
      break;
    case MOVE_LEFT:
      let leftPiece = movePiece('left', action.piece);
      // Object.assign({}, piece, { leftPiece });
      break;
    case MOVE_DOWN:
      let downPiece = movePiece('down', action.piece);
      // Object.assign({}, piece, { downPiece });
      break;
    case MOVE_RIGHT:
      let rightPiece = movePiece('right', action.piece);
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
