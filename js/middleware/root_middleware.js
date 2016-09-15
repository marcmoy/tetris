import { applyMiddleware } from 'redux';
import PieceMiddleware from './piece_middleware';
// import QueueMiddleware from './queue_middleware';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  PieceMiddleware
  // QueueMiddleware,
  // loggerMiddleware
);

export default RootMiddleware;
