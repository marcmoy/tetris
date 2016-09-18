import { BOARD_CLEAR, receiveBoard } from '../actions/board_actions';
import { increasePoints, increaseLines } from '../actions/score_actions';
import clearLines from '../util/clear_lines';

const BoardMiddleware = ({getState, dispatch}) => next => action => {
  const board = getState().board;
  const level = getState().score.level;

  switch (action.type) {
    case BOARD_CLEAR:
      let lineCount = 0;
      let countLines = () => lineCount++;
      let newBoard = clearLines(board, countLines);
      let points = lineCount * 40 * (level + 1);
      dispatch(receiveBoard(newBoard));
      dispatch(increasePoints(points));
      dispatch(increaseLines(lineCount));
      break;
    default:
      break;
  }
  return next(action);
};

export default BoardMiddleware;
