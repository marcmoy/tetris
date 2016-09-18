import { applyMiddleware } from 'redux';
import PieceMiddleware from './piece_middleware';
import BoardMiddleware from './board_middleware';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  PieceMiddleware,
  BoardMiddleware
  // loggerMiddleware
);

export default RootMiddleware;
