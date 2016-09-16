import movePiece from './move_piece';
import { addPiece } from './render_board';

const hardDropPiece = (piece, board) => {
  if (!piece.inPlay) {
    return piece;
  }

  let droppedPiece = movePiece('down', piece, board);
  let newBoard = addPiece(board, droppedPiece);
  return hardDropPiece(droppedPiece, newBoard);
};

export default hardDropPiece;
