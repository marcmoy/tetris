import hardDropPiece from './hard_drop_piece';
import { isEqual } from './move_piece_helpers';

var prevTargetPos = [];
var previewTargetPos = [];

export const addPiece = (board, piece) => {
  let newBoard = Object.assign({}, board);
  let targetPos = [];

  if (!piece.className.includes('preview')) {

    prevTargetPos.forEach(pos => {
      let key = pos.join(",");
      newBoard[key].className = 'empty';
    });

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

  } else {
    // preview piece at bottom position will be not inPlay
    if (!piece.inPlay) {

      let relevantPos = [];

      piece.blocks[piece.rotation].forEach((block, idx) => {
        if (block) {
          let key = piece.pos[idx].join(",");
          if (newBoard[key]) {
            relevantPos.push(piece.pos[idx]);
          }
        }
      });

      if (!isEqual(relevantPos, previewTargetPos)) {
        previewTargetPos.forEach(pos => {
          let key = pos.join(",");
          if (newBoard[key].className.includes('preview')) {
            newBoard[key].className = 'empty';
          }
        });
      }

      relevantPos.forEach(pos => {
        let key = pos.join(",");
        let name = newBoard[key].className;
        if (name === 'empty') {
          newBoard[key].className = piece.className;
        }
      });

      previewTargetPos = relevantPos;
    }
  }

  return newBoard;
};

export const renderPreview = (board, piece) => {
  let preview = piece.className + ' preview';
  let piecePreview = Object.assign({}, piece, { className: preview });
  let previewBoard = Object.assign({}, board);
  let droppedPiece = hardDropPiece(piecePreview, previewBoard);
  return board;
};
