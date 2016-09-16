import hardDropPiece from './hard_drop_piece';

var prevTargetPos = [];

export const addPiece = (board, piece) => {
  let newBoard = board;

  prevTargetPos.forEach(pos => {
    let key = pos.join(",");
    newBoard[key].className = 'empty';
  });

  let targetPos = [];

  piece.blocks[piece.rotation].forEach((block, idx) => {
    if (block) {
      let key = piece.pos[idx].join(",");
      if (newBoard[key]) {
        targetPos.push(piece.pos[idx]);
        newBoard[key].className = piece.className;
      }
    }
  });

  if (piece.inPlay) {
    prevTargetPos = targetPos;
  } else {
    prevTargetPos = [];
  }

  return newBoard;
};

const renderPreview = (board, piece) => {
  let droppedPiece = hardDropPiece(piece, board);
  let previewClassName = droppedPiece.className + ' preview';
  droppedPiece.className = previewClassName;
};
