import { UPDATE_QUEUE } from '../actions/queue_actions';
import { receivePiece } from '../actions/piece_actions';

const QueueMiddleware = ({getState, dispatch}) => next => action => {
  const queue = getState().queue;
  switch (action.type) {
    case UPDATE_QUEUE:
      dispatch(receivePiece(action.nextPiece));
      break;
    default:
      break;
  }
  return next(action);
};

export default QueueMiddleware;
