import { UPDATE_BOARD } from '../actions/board_actions';
import renderBoard from '../util/render_board';

const BoardReducer = (oldState, action) => {

  switch (action.type) {
    case UPDATE_BOARD:
      let newBoard = renderBoard();
      return Object.assign({}, oldState, { board: newBoard });

    default:
      return oldState;
  }
};

export default BoardReducer;
