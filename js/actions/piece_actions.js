export const RESET_PIECE = 'RESET_PIECE';
export const RECEIVE_PIECE = 'RECEIVE_PIECE';
export const STEP_PIECE = 'STEP_PIECE';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_DOWN = 'MOVE_DOWN';
export const MOVE_RIGHT = 'MOVE_RIGHT';
// CW = Clockwise
// CCW = Counter Clockewise
export const ROTATE_CW = 'ROTATE_CW';
export const ROTATE_CCW = 'ROTATE_CCW';
export const HARD_DROP = 'HARD_DROP';

export const receivePiece = piece => ({
  type: RECEIVE_PIECE,
  piece
});

export const stepPiece = () => ({
  type: STEP_PIECE
});

export const moveLeft = () => ({
  type: MOVE_LEFT
});

export const moveDown = () => ({
  type: MOVE_DOWN
});

export const moveRight = () => ({
  type: MOVE_RIGHT
});

export const rotateCW = () => ({
  type: ROTATE_CW
});

export const rotateCCW = () => ({
  type: ROTATE_CCW
});

export const hardDrop = () => ({
  type: HARD_DROP
});

export const resetPiece = () => ({
  type: RESET_PIECE
});

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
  // pos: [
  //   [-3,3], [-3,4], [-3,5], [-3,6],
  //   [-2,2], [-2,4], [-2,5], [-2,6],
  //   [-1,1], [-1,4], [-1,5], [-1,6],
  //   [0,3], [0,4], [0,5], [0,6]
  // ],
//   className: 'piece-i'
// };
