import React from 'react';
import BoardContainer from '../board/board_container';
import StartScreen from '../screens/start_screen';
import QueueContainer from '../queue/queue_container';
import ScoreContainer from '../score/score_container';
import $ from 'jquery';

const BUTTONS = [
  'select-button', 'start-button', 'a-button', 'b-button',
  'up', 'down', 'left', 'right'
];

const LEVEL_SPEED = {
  0: 800, 1: 500, 2: 200, 3: 150, 4: 100, 5: 50, 6: 50, 7: 40, 8: 40
};

class Game extends React.Component {
  constructor() {
    super();
    this.currentLevel = 0;
    this.assignKeyListeners = this.assignKeyListeners.bind(this);
    this.assignButtonListeners = this.assignButtonListeners.bind(this);
    this.removeKeyListeners = this.removeKeyListeners.bind(this);
    this.removeButtonListeners = this.removeButtonListeners.bind(this);
    this.startGame = this.startGame.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
    this.startGameInterval = this.startGameInterval.bind(this);
    this.pauseGameInterval = this.pauseGameInterval.bind(this);
    this.pause = this.pause.bind(this);
    this.turnOffButtons = this.turnOffButtons.bind(this);
    this.addClickEffect = this.addClickEffect.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.renderGameover = this.renderGameover.bind(this);
  }

  componentDidMount() {
    const renderGame = e => {
      e.preventDefault();
      $("#power-switch").animate({ left: 0 }, 300);
      setTimeout(() => {
        $("#power-switch").removeClass("off").addClass("on");
        $("#power-light").removeClass("off").addClass("on");
        $("#start-button").off("mousedown touchstart");
        $(window).off("keydown");
        this.startGame();
      }, 300);
    };

    $("#start-button").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
      renderGame(e);
    });

    $("#start-button").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
    });

    $(window).on("keydown", (e) => {
      if (e.keyCode === 13) renderGame(e);
    });

    this.addClickEffect();
  }

  componentDidUpdate(nextProps) {
    let gameover = nextProps.gamestate.gameover;

    if (gameover) {
      clearInterval(this.interval);
    } else {
      if (this.currentLevel < nextProps.level) {
        clearInterval(this.interval);
        this.currentLevel = nextProps.level;
        this.interval = setInterval(
          () => this.props.stepPiece(), // move piece down
          LEVEL_SPEED[this.currentLevel] // every second
        );
      }
    }
  }

  startGame() {
    this.props.gameOn();
    this.startGameInterval();
    this.song = new Audio('./assets/sounds/tetris-theme-song.mp3');
    this.song.loop = true;
    this.song.volume = 0.7;
    this.song.load();
    this.song.play();
  }

  startGameInterval() {
    this.assignKeyListeners();
    this.assignButtonListeners();
    clearInterval(this.interval);
    this.interval = setInterval(
      () => this.props.stepPiece(), // move piece down
      LEVEL_SPEED[this.props.level] // every second
    );
  }

  pause() {
    if (this.props.gamestate.pause) {
      this.startGameInterval();
      this.props.togglePause(false);
      $("#pause-screen").addClass("hidden");
    } else {
      this.pauseGameInterval();
      this.props.togglePause(true);
      $("#pause-screen").removeClass("hidden");
    }
  }

  pauseGameInterval() {
    this.removeKeyListeners();
    this.removeButtonListeners();
    clearInterval(this.interval);
  }

  removeKeyListeners() {
    $(window).off("keydown");
    $(window).on("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.pause();
      }
    });
  }

  turnOffButtons() {
    BUTTONS.forEach(button => {
      $(`#${button}`).off("mousedown touchstart");
      $(`#${button}`).off("mouseup touchend");
    });
  }

  addClickEffect() {
    BUTTONS.forEach(button => {
      if (button !== 'start-button') {
        $(`#${button}`).on("mousedown touchstart", (e) => {
          e.preventDefault();
          e.target.className = 'clicked';
        });

        $(`#${button}`).on("mouseup touchend", (e) => {
          e.preventDefault();
          e.target.className = '';
        });
      }
    });
  }

  removeButtonListeners() {
    this.turnOffButtons();
    this.addClickEffect();

    $("#start-button").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
      this.pause();
    });

    $("#start-button").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
    });
  }

  assignKeyListeners() {
    // turn off old listeners
    $(window).off("keydown");

    // turn on new listeners
    $(window).on("keydown", (e) => {
      switch (e.keyCode) {
        case 37:
          e.preventDefault();
          $("#left").addClass("clicked");
          this.props.moveLeft();
          break;
        case 39:
          e.preventDefault();
          $("#right").addClass("clicked");
          this.props.moveRight();
          break;
        case 40:
          e.preventDefault();
          $("#down").addClass("clicked");
          this.props.moveDown();
          break;
        case 38:
          e.preventDefault();
          $("#up").addClass("clicked");
          this.props.hardDrop();
          break;
        case 32: // spacebar
          e.preventDefault();
          $("#a-button").addClass("clicked");
          this.props.rotateCW();
          break;
        case 16: // shift
          e.preventDefault();
          $("#b-button").addClass("clicked");
          this.props.rotateCCW();
          break;
        case 13: // enter
          e.preventDefault();
          $("#start-button").addClass("clicked");
          this.pause();
          break;
        default:
          break;
      }
    });
    // turn on new listeners
    $(window).on("keyup", (e) => {
      switch (e.keyCode) {
        case 37:
          e.preventDefault();
          $("#left").removeClass("clicked");
          break;
        case 39:
          e.preventDefault();
          $("#right").removeClass("clicked");
          break;
        case 40:
          e.preventDefault();
          $("#down").removeClass("clicked");
          break;
        case 38:
          e.preventDefault();
          $("#up").removeClass("clicked");
          break;
        case 32: // spacebar
          e.preventDefault();
          $("#a-button").removeClass("clicked");
          break;
        case 16: // shift
          e.preventDefault();
          $("#b-button").removeClass("clicked");
          break;
        case 13: // enter
          e.preventDefault();
          $("#start-button").removeClass("clicked");
          break;
        default:
          break;
      }
    });
  }

  assignButtonListeners() {
    // turn off old listeners
    this.turnOffButtons();

    // turn on new listeners
    $("#down").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
      this.props.moveDown();
      this.downInterval = setInterval(
        () => this.props.moveDown(),
        100
      );
    });

    $("#down").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
      clearInterval(this.downInterval);
    });

    $("#left").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
      this.props.moveLeft();
      this.leftInterval = setInterval(
        () => this.props.moveLeft(),
        100
      );
    });

    $("#left").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
      clearInterval(this.leftInterval);
    });

    $("#right").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
      this.props.moveRight();
      this.rightInterval = setInterval(
        () => this.props.moveRight(),
        100
      );
    });

    $("#right").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
      clearInterval(this.rightInterval);
    });

    $("#up").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
      this.props.hardDrop();
    });

    $("#up").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
    });

    $("#a-button").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
      this.props.rotateCW();
    });

    $("#a-button").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
    });

    $("#b-button").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
      this.props.rotateCCW();
    });

    $("#b-button").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
    });

    $("#start-button").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
      this.pause();
    });

    $("#start-button").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
    });

    $("#select-button").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
    });

    $("#select-button").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
    });
  }

  renderGameover() {
    clearInterval(this.interval);
    $('#gameover-screen').removeClass('hidden');
    $(window).off("keydown");
    this.turnOffButtons();
    this.addClickEffect();

    $("#start-button").on("mousedown touchstart", (e) => {
      e.preventDefault();
      e.target.className = 'clicked';
      $('#gameover-screen').addClass('hidden');
      this.restartGame();
    });

    $("#start-button").on("mouseup touchend", (e) => {
      e.preventDefault();
      e.target.className = '';
    });

    $(window).on("keydown", (e) => {
      if (e.keyCode === 13) {
        $('#gameover-screen').addClass('hidden');
        this.restartGame();
      }
    });
  }

  restartGame() {
    clearInterval(this.interval);
    this.props.resetPiece();
    this.props.resetBoard();
    this.props.updateQueue();
    this.props.resetGameState();
    this.props.resetScore();
    this.startGameInterval();
  }

  renderScreen() {
    let gamestate = this.props.gamestate;
    if (!gamestate.on) return (
      <div id='start-screen'>
        <span className='blink'>
          Press START or ENTER<br/>
          to begin!
        </span>
      </div>
    );

    if (gamestate.gameover) {
      this.renderGameover();
    }

    return (
        <div>
          <div className='hidden dim' id='pause-screen'>
            <span className='blink'>PAUSED</span>
          </div>
          <div className='hidden dim' id='gameover-screen'>
            <span className='blink'>
              GAMEOVER<br/><br/>
              Press START or ENTER<br/>
              to play again.
            </span>
          </div>
          <BoardContainer />
          <div className='right-side clearfix'>
            <QueueContainer />
            <ScoreContainer />
          </div>
        </div>
      );
  }

  render() {
    return (
      <div>
        {this.renderScreen()}
      </div>
    );
  }
}

export default Game;
