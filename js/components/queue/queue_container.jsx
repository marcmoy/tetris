import { connect } from 'react-redux';
import Queue from './queue';

const mapStateToProps = state => ({
  queue: state.queue
});

const QueueContainer = connect(
  mapStateToProps
)(Queue);

export default QueueContainer;
