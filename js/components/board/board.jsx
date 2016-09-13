import React from 'react';

const Board = ({ board }) => {
  let count = 0;
  let playfield = [];
  for (let i = 0; i < 20; i++) {

    let row = [];

    for (let j = 0; j < 10; j++) {
      let key = `${i},${j}`;
      row.push(<td key={key} className={board[key].className}/>);
    }

    playfield.push(
      <tr key={i}>
        {row}
      </tr>
    );
  }
  return(
    <div className='board-container'>
      <table className='board'>
        <tbody>
          { playfield }
        </tbody>
      </table>
    </div>
  );
};

export default Board;
