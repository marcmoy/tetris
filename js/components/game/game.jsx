import React from 'react';
import BoardContainer from '../board/board_container';
import StartScreen from '../screens/start_screen';
import QueueContainer from '../queue/queue_container';
import ScoreContainer from '../score/score_container';
import $ from 'jquery';

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
      renderGame(e);
    });

    $(window).on("keydown", (e) => {
      if (e.keyCode === 13) renderGame(e);
    });
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

  removeButtonListeners() {
    $("#start-button").off("mousedown touchstart");
    $("#a-button").off("mousedown touchstart");
    $("#b-button").off("mousedown touchstart");
    $("#left").off("mousedown touchstart");
    $("#down").off("mousedown touchstart");
    $("#right").off("mousedown touchstart");

    $("#start-button").on("mousedown touchstart", (e) => {
      e.preventDefault();
      this.pause();
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
    $("#start-button").off("mousedown touchstart");

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
      this.pause();
    });
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

    return (
      <div>
        <div className='hidden dim' id='pause-screen'>
          <span className='blink'>PAUSE</span>
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
