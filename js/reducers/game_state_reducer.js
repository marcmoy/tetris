import { CHECK_GAMEOVER, GAME_ON, TOGGLE_PAUSE, RESET_GAME_STATE }
  from '../actions/game_state_actions';

let checkSpots = [
  [0,3],[0,4],[0,5],[0,6],[0,7]
];

const checkGame = board => {
  let count = 0;
  checkSpots.forEach(spot => {
    let key = spot.join(",");
    if (board[key].className !== 'empty') count++;
  });
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
