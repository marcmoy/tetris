import { applyMiddleware } from 'redux';
import PieceMiddleware from './piece_middleware';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  PieceMiddleware,
  loggerMiddleware
);

export default RootMiddleware;
