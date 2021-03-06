import { STEP_PIECE, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT,
  ROTATE_CW, ROTATE_CCW, HARD_DROP
 } from '../actions/piece_actions';
import { receivePiece } from '../actions/piece_actions';
import movePiece from '../util/move_piece';
import rotatePiece from '../util/rotate_piece';
import hardDropPiece from '../util/hard_drop_piece';
import { updateBoard, boardClear } from '../actions/board_actions';
import { updateQueue } from '../actions/queue_actions';
import { checkGameover } from '../actions/game_state_actions';
import { increasePoints } from '../actions/score_actions';
import { Sound } from '../util/sounds';
const sound = new Sound();
sound.load('land');

const PieceMiddleware = ({getState, dispatch}) => next => action => {
  const piece = getState().piece;
  const board = getState().board;
  const queue = getState().queue;

  const update = () => {
    sound.stop('land');
    sound.play('land');
    dispatch(boardClear());
    dispatch(receivePiece(queue));
    dispatch(checkGameover(board));
    dispatch(updateQueue());
  };

  switch (action.type) {
    case STEP_PIECE:
      let stepPiece;
      if (piece.inPlay) {
        stepPiece = movePiece('down', piece, board);
        dispatch(receivePiece(stepPiece));
        dispatch(updateBoard(stepPiece));
      } else {
        update();
      }
      break;
    case MOVE_LEFT:
      if (piece.inPlay) {
        let leftPiece = movePiece('left', piece, board);
        dispatch(receivePiece(leftPiece));
        dispatch(updateBoard(leftPiece));
      } else {
        update();
      }
      break;
    case MOVE_DOWN:
      if (piece.inPlay) {
        let downPiece = movePiece('down', piece, board);
        dispatch(receivePiece(downPiece));
        dispatch(updateBoard(downPiece));
        dispatch(increasePoints(1));
      } else {
        update();
      }
      break;
    case MOVE_RIGHT:
      if (piece.inPlay) {
        let rightPiece = movePiece('right', piece, board);
        dispatch(receivePiece(rightPiece));
        dispatch(updateBoard(rightPiece));
      } else {
        update();
      }
      break;
    case ROTATE_CW:
      if (piece.inPlay) {
        let cwPiece = rotatePiece('cw', piece, board);
        dispatch(receivePiece(cwPiece));
        dispatch(updateBoard(cwPiece));
      } else {
        update();
      }
      break;
    case ROTATE_CCW:
      if (piece.inPlay) {
        let ccwPiece = rotatePiece('ccw', piece, board);
        dispatch(receivePiece(ccwPiece));
        dispatch(updateBoard(ccwPiece));
      } else {
        update();
      }
      break;
    case HARD_DROP:
      let hardPiece = hardDropPiece(piece, board);
      let points = (hardPiece.pos[15][0] - piece.pos[15][0]) * 2;
      dispatch(increasePoints(points));
      dispatch(receivePiece(hardPiece));
      dispatch(updateBoard(hardPiece));
      update();
      break;
    default:
      break;
  }
  return next(action);
};

export default PieceMiddleware;
