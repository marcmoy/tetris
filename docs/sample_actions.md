###Board Actions

```Javascript
const renderBoard = board => {
  type: RENDER_BOARD,
  board
}

const updateBoard = board => {
  type: UPDATE_BOARD,
  board
}
```

###Falling Piece Actions

```Javascript
export const requestPiece = () => ({
  type: REQUEST_PIECE
})

export const receivePiece = piece => ({
  type: RECEIVE_PIECE,
  piece
})

export const moveLeft = piece => ({
  type: MOVE_LEFT,
  piece
});

export const moveDown = piece => ({
  type: MOVE_DOWN,
  piece
});

export const moveRight = piece => ({
  type: MOVE_RIGHT,
  piece
});

export const hardDrop = piece => ({
  type: HARD_DROP,
  piece
});

export const rotateCW = piece => ({
  type: ROTATE_CW,
  piece
});

export const rotateCCW = piece => ({
  type: ROTATE_CCW,
  piece
});
```

###Next Piece Actions

```Javascript
export const sendPiece = piece => ({
  type: SEND_PIECE,
  piece
});

export const addPiece = piece => ({
  type: ADD_PIECE,
  piece
});
```

###Score Actions

```Javascript
export const updateScore = score => ({
  type: UDPATE_SCORE,
  score
});
```
