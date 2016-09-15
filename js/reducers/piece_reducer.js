import { NEXT_PIECE, STEP_PIECE, RECEIVE_PIECE,
  MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, ROTATE_CW, ROTATE_CCW
 } from '../actions/piece_actions';
import { renderPiece } from '../actions/board_actions';
import movePiece from '../util/move_piece';
import { randomPiece } from '../util/piece_types';

const PieceReducer = (piece = {}, action) => {
  switch (action.type) {
    case NEXT_PIECE:
      return randomPiece();
    case RECEIVE_PIECE:
      return action.piece;

  //   case STEP_PIECE:
  //     let stepPiece = movePiece('down', piece);
  //     debugger;
  //     return Object.assign({}, piece, { stepPiece });
  //
  //   case MOVE_LEFT:
  //     let leftPiece = movePiece('left', action.piece);
  //     return Object.assign({}, piece, { leftPiece });
  //
  //   case MOVE_DOWN:
  //     let downPiece = movePiece('down', action.piece);
  //     return Object.assign({}, piece, { downPiece });
  //
  //   case MOVE_RIGHT:
  //     let rightPiece = movePiece('right', action.piece);
  //     return Object.assign({}, piece, { rightPiece });

    // case ROTATE_CW:
    //   let cwPiece = rotatePiece('cw', action.piece);
    //   return Object.assign({}, piece, { fallingPiece: cwPiece });
    //
    // case ROTATE_CCW:
    //   let ccwPiece = rotatePiece('ccw', action.piece);
    //   return Object.assign({}, piece, { fallingPiece: ccwPiece });

    default:
      return piece;
  }
};

export default PieceReducer;
