import React from 'react';

const Queue = ({ nextPiece = {} }) => {

  let queue = [];

  for (let i = 0; i < 4; i++) {

    let row = [];
    for (let j = 0; j < 4; j++) {
      row.push(<td key={j} />);
    }
    queue.push(
      <tr key={i}>
        {row}
      </tr>
    );
  }

  return(
    <div className='queue-container'>
      <table className='queue'>
        <tbody>
          { queue }
        </tbody>
      </table>
      <label>NEXT</label>
    </div>
  );
};

export default Queue;
