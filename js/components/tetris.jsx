import React from 'react';
import PlayfieldContainer from './playfield/playfield_container';
import QueueContainer from './queue/queue_container';
import ScoreContainer from './score/score_container';

const Tetris = () => (
  <div>
    <PlayfieldContainer />
    <div className='right-side clearfix'>
      <QueueContainer />
      <ScoreContainer />
    </div>
  </div>
);

export default Tetris;
