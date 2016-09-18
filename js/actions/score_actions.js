export const RESET_SCORE = 'RESET_SCORE';
export const INCREASE_POINTS = 'INCREASE_POINTS';
export const RECEIVE_POINTS = 'RECEIVE_POINTS';
export const INCREASE_LINES = 'INCREASE_LINES';
export const RECEIVE_LINES = 'RECEIVE_LINES';

export const resetScore = () => ({
  type: RESET_SCORE
});

export const increasePoints = points => ({
  type: INCREASE_POINTS,
  points
});

export const receivePoints = points => ({
  type: RECEIVE_POINTS,
  points
});

export const increaseLines = lines => ({
  type: INCREASE_LINES,
  lines
});

export const receiveLines = lines => ({
  type: RECEIVE_LINES,
  lines
});
