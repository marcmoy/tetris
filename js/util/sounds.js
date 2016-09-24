const SOUNDS = {
  power: new Audio('./assets/sounds/power.mp3'),
  intro: new Audio('./assets/sounds/intro.mp3'),
  music: new Audio('./assets/sounds/tetris-theme-music.mp3'),
  move: new Audio('./assets/sounds/move.mp3'),
  land: new Audio('./assets/sounds/land.mp3'),
  rotate: new Audio('./assets/sounds/rotate.mp3'),
  clearline: new Audio('./assets/sounds/clearline.mp3'),
  gameover: new Audio('./assets/sounds/gameover.mp3')
};

class Sound {
  constructor() {
    this.loadSounds();
  }

  loadSounds() {
    for (let sound in SOUNDS) {
      if (SOUNDS[sound]) {
        SOUNDS[sound].volume = 0.7;
        SOUNDS[sound].load();
      }
    }
  }

  play(sound) {
    SOUNDS[sound].play();
  }

  pause(sound) {
    SOUNDS[sound].pause();
  }

  stop(sound) {
    SOUNDS[sound].pause();
    SOUNDS[sound].currentTime = 0;
  }

  mute() {
    for (let sound in SOUNDS) {
      if (SOUNDS[sound]) SOUNDS[sound].volume = 0;
    }
  }

  unmute() {
    for (let sound in SOUNDS) {
      if (SOUNDS[sound]) SOUNDS[sound].volume = 0.7;
    }
  }
}

export default Sound;
