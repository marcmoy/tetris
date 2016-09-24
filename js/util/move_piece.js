import { nextPos, checkLeft, checkRight, checkDown }
from './move_piece_helpers';
import Sound from './sounds';

const movePiece = (dir, piece, board) => {
  let newPos = nextPos(dir, piece.pos);

  switch (dir) {
    case 'left':
      // checkLeft checks if left move is valid
      if (checkLeft(piece, newPos, board)) {
        // assign new position to piece
        return Object.assign({}, piece, { pos: newPos });
      }
      break;
    case 'right':
      if (checkRight(piece, newPos, board)) {
        // assign new position to piece
        return Object.assign({}, piece, { pos: newPos });
      }
      break;
    case 'down':
      if (checkDown(piece, newPos, board)) {
        // assign new position to piece
        return Object.assign({}, piece, { pos: newPos });
      } else {
        // if down move is not possible, piece is dropped and not in play
        piece = Object.assign({}, piece, { inPlay: false });
      }
      break;
    default:
      return piece;
  }
  return piece;
};

export default movePiece;

// Example of a piece-I object at it's initial state:
// --------------------------------------------------
// const I = {
//   blocks: [
//     [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
//   ],
//   rotation: 0,
//   pos: [
//     [-3,3], [-3,4], [-3,5], [-3,6],
//     [-2,2], [-2,4], [-2,5], [-2,6],
//     [-1,1], [-1,4], [-1,5], [-1,6],
//     [0,3], [0,4], [0,5], [0,6]
//   ],
//   className: 'piece-i',
//   inPlay: true;
// };
