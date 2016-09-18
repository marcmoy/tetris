import { connect } from 'react-redux';
import Game from './game';
import { gameOn, togglePause, resetGameState }
  from '../../actions/game_state_actions';
import { stepPiece, moveLeft, moveRight, moveDown,
  rotateCW, rotateCCW, hardDrop, resetPiece  }
  from '../../actions/piece_actions';
import { resetBoard } from '../../actions/board_actions';
import { updateQueue } from '../../actions/queue_actions';

const mapStateToProps = state => ({
  gamestate: state.gamestate
});

const mapDispatchToProps = dispatch => ({
  // gamestate actions
  gameOn: () => dispatch(gameOn()),
  togglePause: (pause) => dispatch(togglePause(pause)),
  // piece actions
  stepPiece: () => dispatch(stepPiece()),
  moveDown: () => dispatch(moveDown()),
  moveLeft: () => dispatch(moveLeft()),
  moveRight: () => dispatch(moveRight()),
  rotateCW: () => dispatch(rotateCW()),
  rotateCCW: () => dispatch(rotateCCW()),
  hardDrop: () => dispatch(hardDrop()),
  // reset actions
  resetPiece: () => dispatch(resetPiece()),
  resetBoard: () => dispatch(resetBoard()),
  updateQueue: () => dispatch(updateQueue()),
  resetGameState: () => dispatch(resetGameState())
});

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
