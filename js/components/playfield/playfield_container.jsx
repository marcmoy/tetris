import { connect } from 'react-redux';
import Playfield from './playfield';

const mapStateToProps = state => ({
  board: state.board
});

const mapDispatchToProps = dispatch => ({
});

const PlayfieldContainer = connect(
  mapStateToProps
)(Playfield);

export default PlayfieldContainer;
