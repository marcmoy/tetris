import {
  MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT,
  ROTATE_CW, ROTATE_CCW
 } from '../actions/piece_actions';

import movePiece from '../util/move_piece';

const PieceReducer = (oldState = {}, action) => {

  switch (action.type) {
    case MOVE_LEFT:
      let leftPiece = movePiece('left', action.piece);
      return Object.assign({}, oldState, { piece: leftPiece });

    case MOVE_DOWN:
      let downPiece = movePiece('down', action.piece);
      return Object.assign({}, oldState, { piece: downPiece });

    case MOVE_RIGHT:
      let rightPiece = movePiece('right', action.piece);
      return Object.assign({}, oldState, { piece: rightPiece });

    // case ROTATE_CW:
    //   let cwPiece = rotatePiece('cw', action.piece);
    //   return Object.assign({}, oldState, { fallingPiece: cwPiece });
    //
    // case ROTATE_CCW:
    //   let ccwPiece = rotatePiece('ccw', action.piece);
    //   return Object.assign({}, oldState, { fallingPiece: ccwPiece });

    default:
      return oldState;
  }
};

export default PieceReducer;
