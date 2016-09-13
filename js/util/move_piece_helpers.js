// adjust names later on
// import BoardState from 'somewhere';
const BoardState = {
  grid: {},
  height: 0,
  width: 0
};

const DELTAS = {
  left: { x: 0, y: -1 },
  down: { x: 1, y: 0 },
  right: { x: 0, y: 1 }
};

export const nextPos = (dir, currentPos) => {
  let delta = DELTAS[dir];

  return currentPos.map(pos => (
    [pos[0] + delta.x, pos[1] + delta.y]
  ));
};

export const isDropped = (dir, currentPos) => {
  let futurePos = nextPos(currentPos);
  let grid = BoardState.grid;

  // check if all future position are empty
  for (let x = 0; x < BoardState.height; x++) {
    for (let y = 0; y < BoardState.width; y++) {
      if (grid[x,y] !== 'empty') return true;
    }
  }

  return false;
};
