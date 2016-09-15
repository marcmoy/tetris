import React from 'react';
import { stepPiece, moveLeft, moveRight, moveDown }
  from '../actions/piece_actions';
import BoardContainer from './board/board_container';
import QueueContainer from './queue/queue_container';
import ScoreContainer from './score/score_container';
import $ from 'jquery';

class Tetris extends React.Component {
  constructor() {
    super();
    this.assignKeyListeners = this.assignKeyListeners.bind(this);
    this.assignButtonListeners = this.assignButtonListeners.bind(this);
  }

  componentDidMount() {
    this.assignKeyListeners();
    this.assignButtonListeners();
    this.interval = setInterval(
      () => this.context.store.dispatch(stepPiece()), // move piece down
      1000 // every second
    );
  }

  assignKeyListeners() {
    $(window).on("keydown", (e) => {
      switch (e.keyCode) {
        case 37:
          e.preventDefault();
          this.context.store.dispatch(moveLeft());
          break;
        case 39:
          e.preventDefault();
          this.context.store.dispatch(moveRight());
          break;
        case 40:
          e.preventDefault();
          this.context.store.dispatch(moveDown());
          break;
        case 38:
          e.preventDefault();
          break;
        default:
          break;
      }
    });
  }

  assignButtonListeners() {

    $("#down").on("mousedown", (e) => {
      e.preventDefault();
      this.downInterval = setInterval(
        () => this.context.store.dispatch(moveDown()),
        100
      );
    });

    $("#down").on("mouseup", (e) => {
      e.preventDefault();
      clearInterval(this.downInterval);
    });

    $("#left").on("mousedown", (e) => {
      e.preventDefault();
      this.leftInterval = setInterval(
        () => this.context.store.dispatch(moveLeft()),
        100
      );
    });

    $("#left").on("mouseup", (e) => {
      e.preventDefault();
      clearInterval(this.leftInterval);
    });

    $("#right").on("mousedown", (e) => {
      e.preventDefault();
      this.rightInterval = setInterval(
        () => this.context.store.dispatch(moveRight()),
        100
      );
    });

    $("#right").on("mouseup", (e) => {
      e.preventDefault();
      clearInterval(this.rightInterval);
    });

  }

  render() {
    return (
      <div>
        <BoardContainer />
        <div className='right-side clearfix'>
          <QueueContainer />
          <ScoreContainer />
        </div>
      </div>
    );
  }
}

Tetris.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default Tetris;
