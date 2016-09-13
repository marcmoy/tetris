export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_DOWN = 'MOVE_DOWN';
export const MOVE_RIGHT = 'MOVE_RIGHT';

// CW = Clockwise
// CCW = Counter Clockewise
export const ROTATE_CW = 'ROTATE_CW';
export const ROTATE_CCW = 'ROTATE_CCW';

export const moveLeft = piece => ({
  type: MOVE_LEFT,
  piece
});

export const moveDown = piece => ({
  type: MOVE_DOWN,
  piece
});

export const moveRight = piece => ({
  type: MOVE_RIGHT,
  piece
});

export const rotateCW = piece => ({
  type: ROTATE_CW,
  piece
});

export const rotateCCW = piece => ({
  type: ROTATE_CCW,
  piece
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
//   pos: [
//     [-3,3], [-3,4], [-3,5], [-3,6],
//     [-2,2], [-2,4], [-2,5], [-2,6],
//     [-1,1], [-1,4], [-1,5], [-1,6],
//     [0,3], [0,4], [0,5], [0,6]
//   ],
//   className: 'piece-i'
// };
