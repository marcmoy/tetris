export const UPDATE_BOARD = 'UPDATE_BOARD';
export const BOARD_CLEAR = 'BOARD_CLEAR';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';

export const updateBoard = piece => ({
  type: UPDATE_BOARD,
  piece
});

export const boardClear = () => ({
  type: BOARD_CLEAR
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});
