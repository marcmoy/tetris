import { INCREASE_POINTS, INCREASE_LINES, receivePoints, receiveLines }
  from '../actions/score_actions';
import clearLines from '../util/clear_lines';

const ScoreMiddleware = ({getState, dispatch}) => next => action => {
  const points = getState().score.points;
  const lines = getState().score.lines;

  switch (action.type) {
    case INCREASE_POINTS:
      let newPoints = points + action.points;
      dispatch(receivePoints(newPoints));
      break;
    case INCREASE_LINES:
      let newLines = lines + action.lines;
      dispatch(receiveLines(newLines));
      break;
    default:
      break;
  }
  return next(action);
};

export default ScoreMiddleware;
