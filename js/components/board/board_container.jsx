import { connect } from 'react-redux';
import Board from './board';

const mapStateToProps = state => ({
  board: state.board,
  piece: state.piece
});

const mapDispatchToProps = dispatch => ({
});

const BoardContainer = connect(
  mapStateToProps
)(Board);

export default BoardContainer;
