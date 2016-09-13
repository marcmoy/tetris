import React from 'react';

const Playfield = ({ board }) => {

  // debugger;
  let count = 0;
  let playfield = [];
  for (let i = 0; i < 20; i++) {

    let row = [];

    for (let j = 0; j < 10; j++) {
      let key = i.toString() + j;
      row.push(<td key={key} className={board[count].className}/>);
      count++;
    }

    playfield.push(
      <tr key={i}>
        {row}
      </tr>
    );
  }

  return(
    <div className='playfield-container'>
      <table className='grid'>
        <tbody>
          { playfield }
        </tbody>
      </table>
    </div>
  );
};

export default Playfield;
