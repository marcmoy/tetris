export const CHECK_GAMEOVER = 'CHECK_GAMEOVER';
export const GAME_ON = 'GAME_ON';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';
export const RESET_GAME_STATE = 'RESET_GAME_STATE';

export const checkGameover = board => ({
  type: CHECK_GAMEOVER,
  board
});

export const gameOn = () => ({
  type: GAME_ON
});

export const togglePause = (pause) => ({
  type: TOGGLE_PAUSE,
  pause
});

export const resetGameState = () => ({
  type: RESET_GAME_STATE
});
