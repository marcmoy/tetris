import React from 'react';

const Score = ({ level, points, lines }) => (
  <div className='score-container'>
    <strong>LEVEL</strong><br/>
    <span>{level}</span><br/>
    <strong>POINTS</strong><br/>
    <span>{points}</span><br/>
    <strong>LINES</strong><br/>
    <span>{lines}</span><br/>
  </div>
);

export default Score;
