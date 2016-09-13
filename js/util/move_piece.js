import { nextPos, isDropped } from './move_piece_helpers';

const movePiece = (dir, piece) => {

  // assign new position to piece
  let newPos = nextPos(dir, piece.pos);
  let newPiece = Object.assign(piece, { pos: newPos });

  // check if piece is dropped
  // if (isDropped(dir, newPiece)) newPiece.inPlay = false;
  return newPiece;
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
