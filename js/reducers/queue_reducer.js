import { UPDATE_QUEUE } from '../actions/queue_actions';
import { randomPiece } from '../util/piece_types';

const QueueReducer = function(queue = {}, action){

  switch (action.type) {
    case UPDATE_QUEUE:

      return randomPiece();
    default:
      return queue;
  }
};

export default QueueReducer;
