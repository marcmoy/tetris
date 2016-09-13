import { sample } from 'lodash';

export const randomPiece = () => {
  const pieces = [ I, J, L, O, S, T, Z ];
  return sample(pieces)();
};

const initialPos = () => ([
  [-3,3], [-3,4], [-3,5], [-3,6],
  [-2,2], [-2,4], [-2,5], [-2,6],
  [-1,1], [-1,4], [-1,5], [-1,6],
  [0,3], [0,4], [0,5], [0,6]
]);

const I = () => ({
  className: 'piece-i',
  rotation: 0,
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
  ]
});

const J = () => ({
  className: 'piece-j',
  rotation: 0,
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
  ]
});

const L = () => ({
  className: 'piece-l',
  rotation: 0,
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
});

const O = () => ({
  className: 'piece-o',
  rotation: 0,
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
});

const S = () => ({
  className: 'piece-s',
  rotation: 0,
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
  ]
});

const T = () => ({
  className: 'piece-t',
  rotation: 0,
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0]
  ]
});

const Z = () => ({
  className: 'piece-z',
  rotation: 0,
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0]
  ]
});
