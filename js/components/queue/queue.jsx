import React from 'react';

const Queue = ({ queue }) => {
  let nextPiece = [];
  let blocks = queue.blocks[queue.rotation];
  let idx = 0;

  for (let i = 0; i < 4; i++) {

    let row = [];
    for (let j = 0; j < 4; j++) {
      let className = blocks[idx] ? queue.className : 'empty';
      row.push(<td key={j} className={className}/>);

      idx++;
    }
    nextPiece.push(
      <tr key={i}>
        {row}
      </tr>
    );
  }

  return(
    <div className='queue-container'>
      <table className='queue'>
        <tbody>
          { nextPiece }
        </tbody>
      </table>
      <label>NEXT</label>
    </div>
  );
};

export default Queue;
