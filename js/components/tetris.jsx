import React from 'react';
import BoardContainer from './board/board_container';
import QueueContainer from './queue/queue_container';
import ScoreContainer from './score/score_container';

const Tetris = () => (
  <div>
    <BoardContainer />
    <div className='right-side clearfix'>
      <QueueContainer />
      <ScoreContainer />
    </div>
  </div>
);

export default Tetris;
