let canvas, ctx;

window.onload = function () {
  canvas =
    document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  document.addEventListener("keydown", keydownEvent);

  let x = 8;
  setInterval(drew, 1000 / x);

};

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
}
