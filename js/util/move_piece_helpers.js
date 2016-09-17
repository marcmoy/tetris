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

export const checkLeft = (piece, newPos, board) => {
  let blocks = _.chunk(piece.blocks[piece.rotation], 4);
  let chunkPos = _.chunk(newPos, 4);
  let leftSpots = leftPos(blocks, chunkPos);
  return spotsEmpty(leftSpots, board);
};

export const checkRight = (piece, newPos, board) => {
  let blocks = _.chunk(piece.blocks[piece.rotation], 4);
  let chunkPos = _.chunk(newPos, 4);
  let rightSpots = rightPos(blocks, chunkPos);
  return spotsEmpty(rightSpots, board);
};

export const checkDown = (piece, newPos, board) => {
  let blocks = _.chunk(piece.blocks[piece.rotation], 4);
  let chunkPos = _.chunk(newPos, 4);
  let downSpots = downPos(blocks, chunkPos);
  return spotsEmpty(downSpots, board);
};

export const spotsEmpty = (pos, board) => {
  for (let i = 0; i < pos.length; i++) {
    let key = pos[i].join(",");
    if (board[key]) {
      let name = board[key].className;
      if (name !== 'empty' && !name.includes('preview')) return false;
    } else {
      // checks if piece is at bottom of grid
      if (pos[i][0] > 19) return false;
      // checks if piece is against left side
      if (pos[i][1] < 0) return false;
      // checks if piece is against right side
      if (pos[i][1] > 9) return false;
    }
  }
  return true;
};

const leftPos = (blocks, pos) => {
  let checkPos = [[],[],[],[]];

  for (let i = 0; i < blocks.length; i++) {
    let row = blocks[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j]) {
        checkPos[j] = pos[i][j];
        break;
      }
    }
  }

  return checkPos;
};

const rightPos = (blocks, pos) => {
  let checkPos = [[],[],[],[]];

  for (let i = 0; i < blocks.length; i++) {
    let row = blocks[i];
    for (let j = row.length - 1; j >= 0; j--) {
      if (row[j]) {
        checkPos[j] = pos[i][j];
        break;
      }
    }
  }

  return checkPos;
};

const downPos = (blocks, pos) => {
  let checkPos = [[],[],[],[]];
  for (let i = 0; i < blocks.length ; i++) {
    let block = blocks[i];
    for (let j = 0; j < block.length; j++) {
      if (block[j]) {
        checkPos[j] = pos[i][j];
      }
    }
  }

  return checkPos;
};

export const isEqual = (array1, array2) => {
    if (!Array.isArray(array1) && !Array.isArray(array2)) {
        return array1 === array2;
    }

    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0, len = array1.length; i < len; i++) {
        if (!isEqual(array1[i], array2[i])) {
            return false;
        }
    }

    return true;
};
