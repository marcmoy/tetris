import { sample } from 'lodash';

const randomIdx = [0,1,2,3];

export const randomRotation = () => {
  return sample(randomIdx);
};

export const randomPiece = () => {
  const pieces = [ I, J, L, O, S, T, Z ];
  return sample(pieces)();
};

const initialPos = () => ([
  [-3,3], [-3,4], [-3,5], [-3,6],
  [-2,3], [-2,4], [-2,5], [-2,6],
  [-1,3], [-1,4], [-1,5], [-1,6],
  [0,3], [0,4], [0,5], [0,6]
]);

const I = () => ({
  className: 'piece-i',
  rotation: randomRotation(),
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [0, 1, 0, 0,
     0, 1, 0, 0,
     0, 1, 0, 0,
     0, 1, 0, 0 ],

    [0, 0, 0, 0,
     1, 1, 1, 1,
     0, 0, 0, 0,
     0, 0, 0, 0 ],
     
    [0, 0, 1, 0,
     0, 0, 1, 0,
     0, 0, 1, 0,
     0, 0, 1, 0 ],

    [0, 0, 0, 0,
     0, 0, 0, 0,
     1, 1, 1, 1,
     0, 0, 0, 0 ]
  ]
});

const J = () => ({
  className: 'piece-j',
  rotation: randomRotation(),
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [ 0, 0, 0, 0,
      0, 1, 1, 0,
      0, 1, 0, 0,
      0, 1, 0, 0 ],

    [ 0, 0, 0, 0,
      0, 0, 0, 0,
      1, 1, 1, 0,
      0, 0, 1, 0 ],

    [ 0, 0, 0, 0,
      0, 1, 0, 0,
      0, 1, 0, 0,
      1, 1, 0, 0 ],

    [ 0, 0, 0, 0,
      1, 0, 0, 0,
      1, 1, 1, 0,
      0, 0, 0, 0 ]
  ]
});

const L = () => ({
  className: 'piece-l',
  rotation: randomRotation(),
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [ 0, 0, 0, 0,
      0, 1, 0, 0,
      0, 1, 0, 0,
      0, 1, 1, 0 ],

    [ 0, 0, 0, 0,
      0, 0, 0, 0,
      1, 1, 1, 0,
      1, 0, 0, 0 ],

    [ 0, 0, 0, 0,
      1, 1, 0, 0,
      0, 1, 0, 0,
      0, 1, 0, 0 ],

    [ 0, 0, 0, 0,
      0, 0, 1, 0,
      1, 1, 1, 0,
      0, 0, 0, 0 ]
  ]
});

const O = () => ({
  className: 'piece-o',
  rotation: randomRotation(),
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0]
  ]
});

const S = () => ({
  className: 'piece-s',
  rotation: randomRotation(),
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [ 0, 0, 0, 0,
      0, 0, 0, 0,
      0, 1, 1, 0,
      1, 1, 0, 0 ],

    [ 0, 0, 0, 0,
      1, 0, 0, 0,
      1, 1, 0, 0,
      0, 1, 0, 0 ],

    [ 0, 0, 0, 0,
      0, 1, 1, 0,
      1, 1, 0, 0,
      0, 0, 0, 0 ],

    [ 0, 0, 0, 0,
      0, 1, 0, 0,
      0, 1, 1, 0,
      0, 0, 1, 0 ]
  ]
});

const T = () => ({
  className: 'piece-t',
  rotation: randomRotation(),
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [ 0, 0, 0, 0,
      0, 1, 0, 0,
      1, 1, 1, 0,
      0, 0, 0, 0 ],

    [ 0, 0, 0, 0,
      0, 1, 0, 0,
      0, 1, 1, 0,
      0, 1, 0, 0 ],

    [ 0, 0, 0, 0,
      0, 0, 0, 0,
      1, 1, 1, 0,
      0, 1, 0, 0 ],

    [ 0, 0, 0, 0,
      0, 1, 0, 0,
      1, 1, 0, 0,
      0, 1, 0, 0 ]
  ]
});

const Z = () => ({
  className: 'piece-z',
  rotation: randomRotation(),
  pos: initialPos(),
  inPlay: true,
  blocks: [
    [ 0, 0, 0, 0,
      0, 0, 0, 0,
      1, 1, 0, 0,
      0, 1, 1, 0 ],

    [ 0, 0, 0, 0,
      0, 1, 0, 0,
      1, 1, 0, 0,
      1, 0, 0, 0 ],

    [ 0, 0, 0, 0,
      1, 1, 0, 0,
      0, 1, 1, 0,
      0, 0, 0, 0 ],

    [ 0, 0, 0, 0,
      0, 0, 1, 0,
      0, 1, 1, 0,
      0, 1, 0, 0 ]
  ]
});
