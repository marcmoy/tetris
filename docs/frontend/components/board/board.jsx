import React from 'react';
import Square from './square';

const Board = ({ height = 22, width = 10 }) => {

  let board = [];
  for (let i = 0; i < height; i++) {

    // create row of Squares
    let row = [];

    for (let j = 0; j < width; j++) {
      let key = i.toString() + j;
      row.push(<Square key={key} pos={[i,j]}/>);
    }

    // add row to board
    board.push(
      <div className = 'board-row group' key={i}>
        {row}
      </div>
    );
  }

  return(
    <div className='board'>
      {board}
    </div>
  );
};

export default Board;
