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
  }

  componentDidMount() {
    this.assignKeyListeners();
    this.interval = window.setInterval(
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
        default:
          break;
      }
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
