let canvas, ctx;

window.onload = function () {
  canvas =
    document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  document.addEventListener("keydown", keydownEvent);

  let x = 8;
  setInterval(drew, 1000 / x);

};

//gameworld
let gridSize = tileSize = 20;  // 20 * 20 = 400
let nextX = nextY = 0;

//apple
let appleX = (appleY = 15);

//Move snake
snakeX += nextX;
snakeY += nextY;

//snkae over game world 
if (snakeX < 0) {
  snakeX = gridSize - 1;
}
if (snakeX > gridSize - 1) {
  snakeX = 0;
}
if (snakeY < 0) {
  snakeY = gridSize - 1;
}
if (snakeY > gridSize - 1) {
  snakeY = 0;
}

//snakebit 





//snake
let defaultTailSize = 3;
let tailSize = defaultTailSize
let snakeTrail = [];
let snakeX = snakeY = 10;


function keyDownEvent(e) {
  switch (e.KeyCode) {
    case 37:
      nextX = -1;
      nextY = 0;
      break;
    case 38:
      nextX = 0;
      nextY = -1;
      break;
    case 39:
      nextX = 1;
      nextY = 0;
      break;
    case 40:
      nextX = 0;
      nextY = 1;
      break;
  }
};


