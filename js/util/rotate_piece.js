import { spotsEmpty, nextPos, checkLeft, checkRight }
  from './move_piece_helpers';

const rotatePiece = (dir, oldPiece, board) => {
  let newPiece = Object.assign({}, oldPiece);
  switch (dir) {
    case 'cw':
      newPiece.rotation++;
      if (newPiece.rotation > 3) newPiece.rotation = 0;
      break;
    case 'ccw':
      newPiece.rotation--;
      if (newPiece.rotation < 0) newPiece.rotation = 3;
      break;
    default:
      return;
  }

  if (blocksValid(oldPiece, newPiece, board)) {
    return newPiece;
  } else {
    return wallKicked(oldPiece, newPiece, board);
  }
};

const blocksValid = (oldPiece, newPiece, board) => {
  let checkPos = newPositions(oldPiece, newPiece);
  return spotsEmpty(checkPos, board);
};

// finds the new positions by comparing to old positions
const newPositions = (oldPiece, newPiece) => {
  let oldBlocks = oldPiece.blocks[oldPiece.rotation];
  let newBlocks = newPiece.blocks[newPiece.rotation];
  let newPos = [];
  for (let i = 0; i < 16; i++) {
    if (oldBlocks[i] !== newBlocks[i] && newBlocks[i] === 1) {
      newPos.push(newPiece.pos[i]);
    }
  }
  return newPos;
};

const wallKicked = (oldPiece, newPiece, board) => {

  // temporary wallkick for i-pieces
  if (newPiece.className === 'piece-i') {
    return oldPiece;
  }

  // TODO: fix wall kick logic

  // check if left wall kick is possible
  let leftPos = nextPos('left', newPiece.pos);
  if (checkLeft(newPiece, leftPos, board)) {
    console.log('kicked left');
    return Object.assign({}, newPiece, {pos: leftPos});
  }

  // check if right wall kick is possible
  let rightPos = nextPos('right', newPiece.pos);
  if (checkRight(newPiece, rightPos, board)) {
    console.log('kicked right');
    return Object.assign({}, newPiece, {pos: rightPos});
  }

  // if no kick is possible, return original piece
  console.log('no kick');
  return oldPiece;
};

const validKick = () => {
  return true;
};

export default rotatePiece;
