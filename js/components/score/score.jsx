import React from 'react';

const Score = ({ score = {} }) => (
  <div className='score-container'>
    <strong>LEVEL</strong><br/>
    <span>1</span><br/>
    <strong>SCORE</strong><br/>
    <span>0</span><br/>
    <strong>LINES</strong><br/>
    <span>0</span><br/>
  </div>
);

export default Score;
