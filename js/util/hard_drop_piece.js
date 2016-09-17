import movePiece from './move_piece';
import { addPiece } from './render_board';

const hardDropPiece = (piece, board) => {
  if (!piece.inPlay) {
    return piece;
  }
  let boardClone = Object.assign({}, board);
  let droppedPiece = movePiece('down', piece, boardClone);
  let newBoard = addPiece(boardClone, droppedPiece);
  return hardDropPiece(droppedPiece, newBoard);
};

export default hardDropPiece;
