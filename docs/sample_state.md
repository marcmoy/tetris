##Sample State Example
```json
{
  board: {
    0: { className: "empty", pos: [0,0] },
    1: { className: "empty", pos: [0,1] },
    2: { className: "empty", pos: [0,2] },
    ...
  }
  fallingPiece:  { PieceObject },
  nextPiece: { PieceObject },
  score: { level: 1, points: 150, lines: 15 },
}
```

##Piece Object State Example
```json
piece: {
 blocks: [
   [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
   [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
   [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
 ],
 rotation: 0,
 pos: [
   [-3,3], [-3,4], [-3,5], [-3,6],
   [-2,2], [-2,4], [-2,5], [-2,6],
   [-1,1], [-1,4], [-1,5], [-1,6],
   [0,3], [0,4], [0,5], [0,6]
 ],
 className: 'piece-i'
};
```

###Board State
![board_state](./board_state.png)

###Piece State
![piece_rotation](./piece_rotation.png)
![piece_position](./piece_position.png)
