import { RESET_SCORE, RECEIVE_POINTS, RECEIVE_LINES, RECEIVE_LEVEL }
  from '../actions/score_actions';
import { randomPiece } from '../util/piece_types';

const ScoreReducer = function(score = {}, action){
  
  switch (action.type) {
    case RESET_SCORE:
      return { level: 0, points: 0, lines: 0 };
    case RECEIVE_POINTS:
      return Object.assign({}, score, { points: action.points });
    case RECEIVE_LINES:
      return Object.assign({}, score, { lines: action.lines });
    case RECEIVE_LEVEL:
      return Object.assign({}, score, { level: action.level });
    default:
      return score;
  }
};

export default ScoreReducer;
