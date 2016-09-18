import { CHECK_GAMEOVER, GAME_ON, TOGGLE_PAUSE }
  from '../actions/game_state_actions';

const GameStateReducer = function( gamestate = {}, action){

  switch (action.type) {
    case CHECK_GAMEOVER:
      return Object.assign({}, gamestate, { gameover: action.gameover });
    case GAME_ON:
      return Object.assign({}, gamestate, { on: true });
    case TOGGLE_PAUSE:
      return Object.assign({}, gamestate, { pause: action.pause });
    default:
      return gamestate;
  }
};

export default GameStateReducer;
