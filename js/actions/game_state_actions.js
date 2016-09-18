export const CHECK_GAMEOVER = 'CHECK_GAMEOVER';
export const GAME_ON = 'GAME_ON';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';

export const checkGameover = gameover => ({
  type: CHECK_GAMEOVER,
  gameover
});

export const gameOn = () => ({
  type: GAME_ON
});

export const togglePause = (pause) => ({
  type: TOGGLE_PAUSE,
  pause
});
