import React from 'react';
import * as Piece from '../../util/piece-type';

const startPos = [
  [-3,3], [-3,4], [-3,5], [-3,6],
  [-2,2], [-2,4], [-2,5], [-2,6],
  [-1,1], [-1,4], [-1,5], [-1,6],
  [0,3], [0,4], [0,5], [0,6]
];

class FallingPiece extends React.Component {
  constructor() {
    super();
    this.state = { pos: startPos, piece: Piece.I };
    this.intervalId = window.setInterval(
      this.fall.bind(this),
      1000
    );
  }

  fall() {
    let newPos = this.state.pos.map( pos => [pos[0] + 1, pos[1]]);
    this.setState({ pos: newPos });
    console.log(newPos[0]);
  }

  render() {
    return(
      <div>falling piece</div>
    );
  }
}

export default FallingPiece;
