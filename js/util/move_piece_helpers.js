// adjust names later on
// import BoardState from 'somewhere';
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
  // checks if if starting position

  let blocks = _.chunk(piece.blocks[piece.rotation], 4);
  let futurePos = _.chunk(nextPos("down", piece.pos), 4);
  let bottomBlocks, bottomPos;

  for (let i = 3; i >= 0; i--) {
    if (_.sum(blocks[i]) > 0) {
      bottomBlocks = blocks[i];
      bottomPos = futurePos[i];
      break;
    }
  }

  for (let i = 0; i < bottomBlocks.length; i++) {
    if (bottomBlocks[i]) {
      let key = bottomPos[i].join(",");
      if (board[key]) {
        if (board[key].className !== 'empty') return true;
      } else {
        if (bottomPos[i][0] > 19) return true;
      }
    }
  }

  return false;
};
