import { CHECK_GAMEOVER, GAME_ON, TOGGLE_PAUSE, RESET_GAME_STATE }
  from '../actions/game_state_actions';

const checkGame = board => {
  let count = 0;
  // simple lookup for efficiency
  if (board['0,3'].className !== 'empty') count++;
  if (board['0,4'].className !== 'empty') count++;
  if (board['0,5'].className !== 'empty') count++;
  if (board['0,6'].className !== 'empty') count++;
  return count > 0;
};

const GameStateReducer = function( gamestate = {}, action){

  switch (action.type) {
    case CHECK_GAMEOVER:
      let gameover = checkGame(action.board);
      return Object.assign({}, gamestate, { gameover: gameover });
    case GAME_ON:
      return Object.assign({}, gamestate, { on: true });
    case TOGGLE_PAUSE:
      return Object.assign({}, gamestate, { pause: action.pause });
    case RESET_GAME_STATE:
      return  { on: true, gameover: false, pause: false };
    default:
      return gamestate;
  }
};

export default GameStateReducer;
