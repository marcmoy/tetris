import { INCREASE_POINTS, INCREASE_LINES, INCREASE_LEVEL, increaseLevel,
  receivePoints, receiveLines, receiveLevel }
  from '../actions/score_actions';
import clearLines from '../util/clear_lines';

const LEVEL = {
  0: 4,
  1: 8,
  2: 12,
  3: 16,
  4: 20,
  5: 24,
  6: 28,
  7: 32,
  8: 36
};

const ScoreMiddleware = ({getState, dispatch}) => next => action => {
  const points = getState().score.points;
  const lines = getState().score.lines;
  const level = getState().score.level;

  switch (action.type) {
    case INCREASE_POINTS:
      let newPoints = points + action.points;
      dispatch(receivePoints(newPoints));
      break;
    case INCREASE_LINES:
      let newLines = lines + action.lines;
      if (LEVEL[level] <= newLines) {
        dispatch(increaseLevel(level + 1));
      }
      dispatch(receiveLines(newLines));
      break;
    case INCREASE_LEVEL:
      dispatch(receiveLevel(action.level));
      break;
    default:
      break;
  }
  return next(action);
};

export default ScoreMiddleware;
