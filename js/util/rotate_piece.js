const rotatePiece = (dir, piece, board) => {
  let newPiece = piece;

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

  return newPiece;
};
export default rotatePiece;
