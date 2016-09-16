import { BOARD_CLEAR, receiveBoard } from '../actions/board_actions';
import clearLines from '../util/clear_lines';

const BoardMiddleware = ({getState, dispatch}) => next => action => {
  const board = getState().board;
  switch (action.type) {
    case BOARD_CLEAR:
      let newBoard = clearLines(board);
      dispatch(receiveBoard(newBoard));
      break;
    default:
      break;
  }
  return next(action);
};

export default BoardMiddleware;
