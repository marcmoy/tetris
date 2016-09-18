import { connect } from 'react-redux';
import Score from './score';

const mapStateToProps = state => ({
  level: state.score.level,
  points: state.score.points,
  lines: state.score.lines
});

const ScoreContainer = connect(
  mapStateToProps
)(Score);

export default ScoreContainer;
