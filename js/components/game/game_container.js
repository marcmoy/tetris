import { connect } from 'react-redux';
import Game from './game';
import { gameOn, togglePause } from '../../actions/game_state_actions';
import { stepPiece, moveLeft, moveRight, moveDown,
  rotateCW, rotateCCW, hardDrop  }
  from '../../actions/piece_actions';

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
  hardDrop: () => dispatch(hardDrop())
});

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
