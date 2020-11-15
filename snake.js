let canvas, ctx;

window.onload = function () {
  canvas =
    document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  document.addEventListener("keydown", keydownEvent);

  let x = 8;
  setInterval(drew, 1000 / x);

};


