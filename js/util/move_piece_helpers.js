import _ from 'lodash';

const BoardState = {
  grid: {},
  height: 0,
  width: 0
};

const DELTAS = {
  left: { x: 0, y: -1 },
  down: { x: 1, y: 0 },
  right: { x: 0, y: 1 }
};

export const nextPos = (dir, currentPos) => {
  let delta = DELTAS[dir];
  return currentPos.map(pos => (
    [pos[0] + delta.x, pos[1] + delta.y]
  ));
};


export const isDropped = (piece, board) => {
  // look up future positions and blocks
  let blocks = _.chunk(piece.blocks[piece.rotation], 4);
  let futurePos = _.chunk(nextPos("down", piece.pos), 4);
  let checkPos = [[], [], [], []];

  // read blocks and check for the last positions to check against
  for (let i = 0; i < blocks.length ; i++) {
    let block = blocks[i];
    for (let j = 0; j < block.length; j++) {
      if (block[j]) {
        checkPos[j] = futurePos[i][j];
      }
    }
  }

  // check each 'bottom' position if it's empty or not
  for (let i = 0; i < checkPos.length; i++) {
    let key = checkPos[i].join(",");
    if (board[key]) {
      if (board[key].className !== 'empty') return true;
    } else {
      // checks if piece is at bottom of grid
      if (checkPos[i][0] > 19) return true;
    }
  }

  return false;
};
