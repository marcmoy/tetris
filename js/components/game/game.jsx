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

class Game extends React.Component {
  constructor() {
    super();
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
      $("#power-switch").removeClass("off").addClass("on");
      $("#power-light").removeClass("off").addClass("on");
      $("#start-button").off("mousedown touchstart");
      $(window).off("keydown");
      this.startGame();
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

  startGame() {
    this.props.gameOn();
    this.startGameInterval();
  }

  startGameInterval() {
    this.assignKeyListeners();
    this.assignButtonListeners();
    this.interval = setInterval(
      () => this.props.stepPiece(), // move piece down
      1000 // every second
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
          this.props.moveLeft();
          break;
        case 39:
          e.preventDefault();
          this.props.moveRight();
          break;
        case 40:
          e.preventDefault();
          this.props.moveDown();
          break;
        case 38:
          e.preventDefault();
          this.props.hardDrop();
          break;
        case 32: // spacebar
          e.preventDefault();
          this.props.rotateCW();
          break;
        case 16: // shift
          e.preventDefault();
          this.props.rotateCCW();
          break;
        case 13: // enter
          e.preventDefault();
          this.pause();
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
