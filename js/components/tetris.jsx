import React from 'react';
import { stepPiece } from '../actions/piece_actions';
import BoardContainer from './board/board_container';
import QueueContainer from './queue/queue_container';
import ScoreContainer from './score/score_container';

class Tetris extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.interval = window.setInterval(
      () => this.context.store.dispatch(stepPiece()), // move piece down
      1000 // every second
    );
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
