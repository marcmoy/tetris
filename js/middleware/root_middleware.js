import { applyMiddleware } from 'redux';
import PieceMiddleware from './piece_middleware';
import BoardMiddleware from './board_middleware';
import ScoreMiddleware from './score_middleware';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  PieceMiddleware,
  BoardMiddleware,
  ScoreMiddleware
  // loggerMiddleware
);

export default RootMiddleware;
