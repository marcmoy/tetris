let clearIndex = null;

const clearLines = (board, countLines) => {
  if (noLines(board)) return board;
  let newBoard = removeLine(board, clearIndex, countLines);
  return clearLines(newBoard, countLines);
};

const noLines = board => {
  for (let row = 0; row < 20; row++) {
    let count = 0;
    for (let col = 0; col < 10 ; col++) {
      let key = `${row},${col}`;
      let name = board[key].className;
      if (name !== 'empty' && !name.includes('preview')) count++;
    }
    if (count === 10) {
      clearIndex = row;
      return false;
    }
  }
  return true;
};

const removeLine = (oldBoard, clearRow, countLines) => {
  countLines();
  let newBoard = Object.assign({}, oldBoard);

  for (let row = clearRow; row > 0; row--) {
    for (let col = 0; col < 10; col++) {
      let key = `${row},${col}`;
      let keyAbove = `${row - 1},${col}`;
      // handles edge case at top row
      let newClassName = oldBoard[keyAbove].className || 'empty';
      newBoard[key].className = newClassName;
    }
  }

  return newBoard;
};

export default clearLines;
