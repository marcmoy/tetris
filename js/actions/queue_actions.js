export const UPDATE_QUEUE = 'UPDATE_QUEUE';

export const updateQueue = (nextPiece) => ({
  type: UPDATE_QUEUE,
  nextPiece
});
