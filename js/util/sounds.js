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

// null sound for mobile
export const nullSound = {
  toggleMute: () => {},
  loadEffects: () => {},
  play: sound => {},
  stop: sound => {},
  load: sound => {},
  pause: sound => {}
};

export class Sound {
  constructor(muted) {
    this.muted = muted;
    this.toggleMute = this.toggleMute.bind(this);
  }

  load(...sounds) {
    sounds.forEach(sound => {
      SOUNDS[sound].load();
      SOUNDS[sound].volume = sound === 'music' ? 0.3: 0.6;
    });
  }

  loadEffects() {
    ['move', 'land', 'rotate', 'clearline', 'rotate'].forEach(sound => {
      SOUNDS[sound].load();
    });
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

  toggleMute() {
    if (this.muted) {
      this.unmute();
    } else {
      this.mute();
    }
    this.muted = !this.muted;
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
